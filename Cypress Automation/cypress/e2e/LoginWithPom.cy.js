/// <reference types="Cypress"/>
import Login from "../PageObjects/LoginPageA2.js"

describe("POM", () => {
    it("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        const ln = new Login() // Object Reference Verifiable
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.fixture("orangehrm.json").then((data) => {
            const ln = new Login() // Object Reference Verifiable
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
    })
})