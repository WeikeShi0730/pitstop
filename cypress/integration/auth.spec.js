describe("add items", () => {
  it("user can sign up/in/out", () => {
    cy.visit("http://localhost:3000/");

    // Sign up
    cy.findByRole("link", { name: /sign in/i }).click();

    cy.findByRole("textbox", { name: /displayName/i }).type("cy");
    cy.findByRole("textbox", { name: /signUpEmail/i }).type("cy@cy.com");
    cy.get("#signUpPassword").type("cycycy");

    cy.get("#signUpButton").click();

    // Sign out
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /sign out/i }).click();

    // Sign in
    cy.findByRole("link", { name: /sign in/i }).click();

    cy.findByRole("textbox", { name: /signInEmail/i }).type("cy@cy.com");
    cy.get("#signInPassword").type("cycycy");

    cy.get("#signInButton").click();

    // Sign out
    cy.findByRole("link", { name: /cy/i }).click();
    cy.findByRole("tab", { name: /sign out/i }).click();
  });
});
