describe("Search", () => {
  it("user can search for products", () => {
    cy.visit("http://localhost:3000/");

    // Input
    cy.get("#searchBtn").click();
    cy.get("#searchTextbox").type("vettle");
    cy.findByRole("button", { name: /→/i }).click();
    cy.get("#productList").should("contain", "Sebastian Vettel cartoon figure");

    // Input
    cy.get("#searchBtn").click();
    cy.get("#searchTextbox").type("abcdefg{enter}");
    cy.get("#productList").should("contain", "Couldn't find products");
  });
});
