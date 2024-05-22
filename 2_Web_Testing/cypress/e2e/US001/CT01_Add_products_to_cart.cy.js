/// <reference types="cypress"/>

describe("Add products to cart", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });
  it("Add product with available stock", () => {
    cy.pickFromList(7);
    cy.addProduct("S", "Green", 2);
    //Result validation
    cy.get(".woocommerce-message").should(
      "contain",
      "“Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho."
    );
  });

  it("Add an out-of-stock product", () => {
    //Product Aero Daily Fitness Tee, size M and color Black
    //Out of stock at the time of testing.
    cy.searchByName("Aero Daily Fitness Tee");
    cy.addProduct("M", "Black", 1);

    //Result validation
    cy.get(".stock").should("contain", "Fora de estoque");
    cy.on("window:alert", (t) => {
      expect(t).to.contains(
        "Desculpe, este produto não está disponível. Escolha uma combinação diferente."
      );
    });

    //
  });

  it("Add quantity above stock limit", () => {
    //Product Ajax Full-Zip Sweatshirt, size L and color Green
    //There were 100 pieces in stock at the time of the test.
    cy.pickFromList(3);
    cy.addProduct("L", "Green", 101);

    //Result validation
    cy.get(".mini-cart-items").should("contain", "0");
  });
});
