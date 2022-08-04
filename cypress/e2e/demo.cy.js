describe("Demo Test", async () => {
  it("Visit Google Site", async () => {
    cy.visit("https://www.google.com");
    cy.get("[name=q]").type("Cypress Tutorial");
  })
})