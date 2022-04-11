const { waitForDebugger } = require("inspector");

describe("Add/remove/delete items", () => {
  it("user can add/remove/delete items in cart", () => {
    cy.visit("http://localhost:3000/");

    // Sign in
    cy.findByRole("link", { name: /sign in/i }).click();

    cy.findByRole("textbox", { name: /signInEmail/i }).type("cy@cy.com");
    cy.get("#signInPassword").type("cycycy");

    cy.get("#signInButton").click();

    // Shop all
    cy.findByRole("link", { name: /shop all/i }).click();
    // Sort
    cy.findByRole("tab", { name: /\$\$\$/i }).click();
    // Add
    cy.get("#addToCart").first().click();

    // Cart dropdown
    cy.get("#cartIcon").click();
    // Checkout page
    cy.findByRole("link", { name: /checkout/i }).click();

    // Should contain products
    cy.get("[id=checkoutItem]").its("length").should("be.eq", 1);

    // // Add items
    cy.get("#checkoutItem").get("#add").click();
    cy.get("#checkoutItem").get("#input").should("have.value", 2);
    // Set items 20
    cy.get("#checkoutItem").get("#input").clear();
    cy.get("#checkoutItem").get("#input").clear().type(2).type(0);
    cy.get("#checkoutItem").get("#input").should("have.value", 20);
    // // // Remove items
    cy.get("#checkoutItem").get("#remove").click();
    cy.get("#checkoutItem").get("#input").should("have.value", 19);
    // // // Set items {}
    cy.get("#checkoutItem").get("#input").clear();
    cy.get("body").click(0, 0);
    cy.get("#checkoutItem").get("#input").should("have.value", 1);
    // // // Delete items
    cy.get("#checkoutItem").get("#delete").click();
    cy.get("#checkout").should("not.contain", "#product");

    // Sign out
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /sign out/i }).click();
  });
});
