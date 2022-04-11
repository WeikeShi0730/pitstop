describe("Shop all", () => {
  it("user can shop all the products and add to cart", () => {
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

    cy.findByRole("link", { name: /products/i }).click();
    // Sort
    cy.findByRole("tab", { name: /\$\$\$/i }).click();
    // 3rd page
    cy.findByRole("tab", { name: /3/i }).click();
    // Add
    cy.get("#addToCart").first().click();

    // Cart dropdown
    cy.get("#cartIcon").click();
    // Checkout page
    cy.findByRole("link", { name: /checkout/i }).click();

    // Should contain products
    cy.get("[id=checkoutItem]").its("length").should("be.eq", 2);
    // Delete items
    cy.get("[id=delete]").click({ multiple: true });
    cy.get("#checkout").should("not.contain", "#product")

    // Sign out
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /sign out/i }).click();
  });
});
