/// <reference types="Cypress"/>

describe("handle tabs", () => {
    it("approach one", () => {
        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click() // clicking on link
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)

        cy.go("back") // back to parent tab
    })

    it("approach two", () => {
        // domain should be same (https://the-internet.herokuapp.com)
        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab
        cy.get("a[href='/windows/new']").then((x) => {
            let url = x.prop("href")
            cy.visit(url)
        })

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)

        cy.go("back") // back to parent tab
    })
})