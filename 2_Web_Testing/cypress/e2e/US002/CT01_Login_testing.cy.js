/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
//Mass data import
const users = require("../../fixtures/users.json");

describe("Feature: Login", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
  });

  it("Successful login with e-mail", () => {
    //Mass data import directly from Fixture
    cy.fixture("users").then((data) => {
      //cy.get("#username").type(data.email, { log: false });
      //cy.get("#password").type(data.password, { log: false });
      //cy.get(".woocommerce-form > .button").click();

      //Example with customized command
      cy.login(data.email, data.password);
      ///Result validation
      cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
        "contain",
        "Olá, asdrubas_tromb1 (não é asdrubas_tromb1? Sair)"
      );
    });
  });

  it("Succesful login with username", () => {
    cy.fixture("users").then((data) => {
      cy.get("#username").type(data.username, { log: false });
      cy.get("#password").type(data.password, { log: false });
      cy.get(".woocommerce-form > .button").click();

      ///Result validation
      cy.get("a > .hidden-xs").should("contain", "Welcome asdrubas_tromb1 !");
    });
  });

  it("Invalid e-mail attempt", () => {
    var email = faker.internet.email();

    cy.get("#username").type(email);
    cy.get("#password").type(users.password, { log: false });
    cy.get(".woocommerce-form > .button").click();

    ///Result validation
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
  });

  it("Incorrect password attempt", () => {
    var password = faker.internet.password();

    cy.get("#username").type(users.username, { log: false });
    cy.get("#password").type(password);
    cy.get(".woocommerce-form > .button").click();

    ///Result validation
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: A senha informada para o usuário asdrubas_tromb1 está incorreta. Perdeu a senha?"
    );
  });
});
