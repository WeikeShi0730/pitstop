describe("Shop by teams", () => {
  it("user can shop teams products and add to cart", () => {
    cy.visit("http://localhost:3000/");

    // Sign in
    cy.findByRole("link", { name: /sign in/i }).click();

    cy.findByRole("textbox", { name: /signInEmail/i }).type("cy@cy.com");
    cy.get("#signInPassword").type("cycycy");

    cy.get("#signInButton").click();

    // Shop by teams
    cy.findByRole("link", { name: /shop by teams/i }).click();
    // Add
    cy.findByRole("link", { name: /shop mclaren/i }).click();
    cy.get("#addToCart").first().click();

    cy.get("#nav").findByRole("link", { name: /teams/i }).click();
    // Add
    cy.findByRole("link", { name: /shop red bull/i }).click();
    cy.get("#addToCart").first().click();

    // Cart dropdown
    cy.get("#cartIcon").click();
    // Checkout page
    cy.findByRole("link", { name: /checkout/i }).click();

    // Should contain products
    cy.get("#checkout").should("contain", "Lando Norris' helmet");
    cy.get("#checkout").should("contain", "Max Verstappen symbol");
    // Delete items
    // cy.get("#delete").click();

    // Sign out
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /sign out/i }).click();
  });
});
