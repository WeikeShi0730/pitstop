describe("Contact", () => {
  it("user can contact the merchant", () => {
    cy.visit("http://localhost:3000/");

    // Input
    cy.get("#nav")
      .findByRole("link", { name: /contact/i })
      .click();
    cy.wait(150);
    cy.findByRole("textbox", { name: /name/i }).type("cy");
    cy.findByRole("textbox", { name: /email/i }).type("cy@cy.com");
    cy.findByRole("textbox", { name: /message/i }).type("test message");
    cy.findByRole("button", { name: /submit/i }).click();

    // check url back to homepage
    cy.url().should('eq', 'http://localhost:3000/') 
  });
});
