/// <reference types="Cypress"/>

describe("home page", () => {
    it("verify title", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should("eq", "OrangeHRM")
    })
})