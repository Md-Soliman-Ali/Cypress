/// <reference types="Cypress"/>
// Hooks: before, after, beforeEach, AfterEach
// Tags: it.skip, it.only 

describe("MyTestSuite", () => {

    before(() => {
        cy.log("***** lunch app *****")
    })

    after(() => {
        cy.log("***** close app *****")
    })

    beforeEach(() => {
        cy.log("***** Login *****")
    })

    afterEach(() => {
        cy.log("***** Logout *****")
    })

    it("search", () => {
        cy.log("***** searching *****")
    })

    it("advanced search", () => {
        cy.log("***** advanced searching *****")
    })

    it("listing products", () => {
        cy.log("***** listing products *****")
    })
})