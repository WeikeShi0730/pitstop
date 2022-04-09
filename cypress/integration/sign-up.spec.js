describe("add items", () => {
  it("user can sign up", () => {
    cy.visit("http://localhost:3000/");

    // Sign up
    cy.findByRole("link", { name: /sign in/i }).click();

    cy.findByRole("textbox", { name: /displayName/i }).type("cy");
    cy.findByRole("textbox", { name: /signUpEmail/i }).type("cy@cy.com");
    cy.get("#signUpPassword").type("cycycy");

    cy.get("#signUnButton").click();
  });
});
