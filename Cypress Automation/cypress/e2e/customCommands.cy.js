/// <reference types="Cypress"/>

// click on link using label
// over writing existing contains() command
// reusable custom command 

describe("Custom Commands", () => {
    it("handling links without using custom command", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")
    })

    it("handling links using custom command", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")
    })

    it("Login Command", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Log in")
        cy.loginWeb("testing@gmail.com", "test123")

        cy.get(".ico-account").should("have.text", "My account")
    })
})