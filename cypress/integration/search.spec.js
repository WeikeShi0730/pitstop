describe("Search", () => {
  it("user can search for products", () => {
    cy.visit("http://localhost:3000/");

    // Input
    cy.get("#searchBtn").click();
    cy.get("#searchTextbox").type("vettle");
    cy.findByRole("button", { name: /→/i }).click();
    cy.get("[id=product]").its("length").should("be.gt", 0);

    // Input
    cy.get("#searchBtn").click();
    cy.get("#searchTextbox").clear().type("abcdefg{enter}");
    cy.get("#productList").should("contain", "Couldn't find products");
  });
});
