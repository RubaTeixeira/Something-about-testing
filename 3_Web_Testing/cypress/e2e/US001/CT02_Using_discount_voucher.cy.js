/// <reference types ="cypress"/>
describe("Functionality: use discount voucher in the cart.", () => {
  //Access store
  beforeEach(() => {
    cy.visit("produtos");
  });
  it.only("Valid voucher test", () => {
    //Choose product
    cy.pickFromList(3);
    cy.addProduct("L", "Green", 1);

    //Access cart
    cy.get(".woocommerce-message > .button").click();

    //Insert coupon
    cy.fixture("vouchers").then((disct) => {
      cy.get("#coupon_code").type(disct.voucherVld);
    });
    cy.get(".coupon > .btn").click();

    //Result validation
    cy.get(".woocommerce-message").should(
      "contain",
      "Código de cupom aplicado com sucesso."
    );
  });

  it("Invalid voucher test", () => {
    //Choose product
    cy.pickFromList(3);
    cy.addProduct("M", "Red", 1);

    //Access cart
    cy.get(".woocommerce-message > .button").click();

    //Insert coupon
    cy.fixture("vouchers").then((disct) => {
      cy.get("#coupon_code").type(disct.voucherInv);
    });
    cy.get(".coupon > .btn").click();

    //Result validation
    cy.get(".woocommerce-error > li").should("contain", "não existe!");
  });
});
