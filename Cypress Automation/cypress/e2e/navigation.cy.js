/// <reference types="Cypress"/>

describe("mysuite", () => {
    it("NavigationTest", () => {
        cy.visit("http://demo.opencart.com")
        cy.title().should("eq", "Your Store") // Home

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should("have.text", "Cameras") // Camera

        cy.go("back") // GO Back To Home
        cy.title().should("eq", "Your Store") // Home

        cy.go("forward") // Camera
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.reload()
    })
})