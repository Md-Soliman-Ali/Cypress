/// <reference types="Cypress"/>
import "cypress-iframe"
require('@4tw/cypress-drag-drop')

describe("mouse operations", () => {

    it("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com")

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should("not.be.visible")
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover").click()
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should("be.visible")
    })

    it("Right Click - Approach 1", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
        cy.get('.context-menu-icon-copy > span').should("be.visible")
    })


    it("Right Click - Approach 2", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy > span').should("be.visible")
    })

    it("Double Click - Approach 1", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
    })

    it("Double Click - Approach 2", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
    })

    it("Drag & Drop Using Plugin", () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        cy.get("#box6").should("be.visible")
        cy.get("#box106").should("be.visible")

        cy.wait(3000)
        cy.get("#box6").drag("#box106", {
            force: true
        })
    })

    it("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        // United States of America
        cy.get(':nth-child(2) > tbody > :nth-child(96) > :nth-child(2)').scrollIntoView({
            duration: 2000
        })
        cy.get(':nth-child(2) > tbody > :nth-child(96) > :nth-child(2)').should("be.visible")

        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(2)').scrollIntoView({
            duration: 2000
        })
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(2)').should("be.visible")
    })
})