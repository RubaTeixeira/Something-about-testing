// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- Login command --
Cypress.Commands.add("login", (email, password) => {
  cy.get("#username").type(email, { log: false });
  cy.get("#password").type(password, { log: false });
  cy.get(".woocommerce-form > .button").click();
});

//-- Choose product from the list command --
Cypress.Commands.add("pickFromList", (item) => {
  cy.get(".product-block").eq(item).click();
});

// -- Search product by name command --
Cypress.Commands.add("searchByName", (productName) => {
  cy.get("[name='s']").eq(1).type(productName);
  cy.get(".button-search").eq(1).click();
});

// -- Add product to cart command --
Cypress.Commands.add("addProduct", (size, color, amount) => {
  cy.get(`.button-variable-item-${size}`).click();
  cy.get(`.button-variable-item-${color}`).click();
  cy.get(".input-text").clear().type(amount);
  cy.get(".single_add_to_cart_button").click();
});
