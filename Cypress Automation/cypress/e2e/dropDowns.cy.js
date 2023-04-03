/// <reference types="Cypress"/>

describe("handle drop downs", () => {
    it("drop down with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select("India").should("have.value", "India")
    })

    it("drop down without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Brazil").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text", "Brazil")
    })

    it("auto suggest drop down", () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Bangladesh")
        cy.get(".suggestion-title").contains("Bangladesh Army").click()
    })

    it("dynamic drop down", () => {
        cy.visit("https://www.google.com")

        cy.get("[name='q']").type("cypress automation")
        cy.wait(3000)
        cy.get(".wM6W7d>span").should("have.length", 12)

        cy.get(".wM6W7d>span").each(($element, index, $list) => {
            if ($element.text() == "cypress automation vs selenium") {
                cy.wrap($element).click()
            }
        })

        cy.get("[name='q']").should("have.value", "cypress automation vs selenium")
    })
})