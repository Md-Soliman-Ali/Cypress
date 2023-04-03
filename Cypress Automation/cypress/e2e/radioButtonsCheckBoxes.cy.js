/// <reference types="Cypress"/>

describe("check UI elements", () => {
    it("checking radio buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibility of radio buttons
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        // selecting radio buttons
        cy.get("#male").check().should("be.checked")
        cy.get("#female").should('not.be.checked')

        cy.get("#female").check().should("be.checked")
        cy.get("#male").should('not.be.checked')
    })

    it("checking check boxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibility of the emelent
        cy.get("#monday").should('be.visible')

        // selecting single check box
        cy.get("#monday").check().should("be.checked")

        // unselecting check box
        cy.get("#monday").uncheck().should("not.be.checked")

        // selecting all the check boxes
        cy.get(".form-check-input[type='checkbox']").check().should("be.checked")

        // unselecting all the check boxes
        cy.get(".form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // select first checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should("be.checked")

        // select last checkbox
        cy.get(".form-check-input[type='checkbox']").last().check().should("be.checked")
    })
})