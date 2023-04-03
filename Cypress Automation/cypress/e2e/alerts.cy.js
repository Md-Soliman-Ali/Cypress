/// <reference types="Cypress"/>

describe("alerts", () => {
    it("JS Alert", () => {

        // javascript alert: it will have some text and an "ok" button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (x) => {
            expect(x).to.contains("I am a JS Alert")
        })

        // alert window automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it("JS Confirm Alert - OK", () => {

        // javascript confirm alert: it will have some text and an "ok" and "cancel" button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (x) => {
            expect(x).to.contains("I am a JS Confirm")
        })

        // alert window automatically closed by cypress
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it("JS Confirm Alert - Cancel", () => {

        // javascript confirm alert: it will have some text and an "ok" and "cancel" button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (x) => {
            expect(x).to.contains("I am a JS Confirm")
        })

        // closes alert window using cancel button
        cy.on("window:confirm", () => false)
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

    it("JS Prompt Alert", () => {

        // javascript prompt alert: it will have some text with a text box for user input along with "OK"
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((x) => {
            cy.stub(x, "prompt").returns("welcome")
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text', 'You entered: welcome')
    })

    it("Authenticated Alert", () => {

        // Approach One
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })

        cy.get("div[class='example'] p").should("have.contain", "Congratulations")

        // Approach Two
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })
})