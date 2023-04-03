/// <reference types="Cypress"/>
import "cypress-iframe"

describe("handling frames", () => {
    it("approach one", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr").its("0.contentDocument.body").should("be.visible").then(cy.wrap)
        iframe.clear().type("Cypress {ctrl+a}")
        cy.get('[aria-label="Bold"]').click()
    })

    it("approach two using custom command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type("custom command {ctrl+a}")
        cy.get('[aria-label="Bold"]').click()
    })

    it("approach three using cypress iframe plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded("#mce_0_ifr") // load the frame
        cy.iframe("#mce_0_ifr").clear().type("cypress iframe plugin  {ctrl+a}")
        cy.get('[aria-label="Bold"]').click()
    })

})