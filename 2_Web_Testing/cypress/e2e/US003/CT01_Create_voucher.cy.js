/// <reference types="cypress"/>
const token = require("../../fixtures/authAPI.json");

describe("API testing, voucher registration", () => {
  //List registered coupons
  it("Check the coupon list", () => {
    cy.request({
      method: "GET",
      url: "wp-json/wc/v3/coupons",
      headers: { authorization: `${token.authorization}` },
    }).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  //Registering a new voucher
  it("Register a new voucher", () => {
    cy.request({
      method: "POST",
      url: "wp-json/wc/v3/coupons",
      headers: { authorization: `${token.authorization}` },
      body: {
        code: "supercoupontestjun24",
        amount: "10",
        discount_type: "fixed_product",
        description: "Test discount voucher",
      },
    }).should((response) => {
      expect(response.status).to.equal(201);
    });
  });

  //Attempt to register under the same name
  it("Trying to register an existing voucher", () => {
    cy.request({
      method: "POST",
      url: "wp-json/wc/v3/coupons",
      headers: { authorization: `${token.authorization}` },
      body: {
        code: "coupontestjun24",
        amount: "100",
        discount_type: "fixed_product",
        description: "Test discount voucher",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal("O código de cupom já existe");
    });
  });
});
