describe("Wishlist", () => {
  it("user can add/remove items to wishlist", () => {
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
    cy.get("#heart").first().click();

    cy.findByRole("link", { name: /products/i }).click();
    // Sort
    cy.findByRole("tab", { name: /\$\$\$/i }).click();
    // 3rd page
    cy.findByRole("tab", { name: /3/i }).click();
    // Add
    cy.get("#heart").first().click();

    // Wishlist page
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /wishlist/i }).click();

    // Should contain products
    cy.get("[id=product]").its("length").should("be.eq", 2);

    // Remove heart
    cy.get("[id=heart]").click({ multiple: true });
    cy.get("#wishlist").should("not.contain", "#product")

    // Sign out
    cy.findByRole("tab", { name: /sign out/i }).click();
  });
});
