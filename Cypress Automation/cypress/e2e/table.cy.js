/// <reference types="Cypress"/>

describe("handle tables", () => {

    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php")

        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()

        // Customers -> Customers
        cy.get("#menu-customer>a").click() // customers main menu
        cy.get("#menu-customer>ul>li:first-child").click() // customers sub/child item
    })

    it("check number rows & columns", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").should("have.length", "10")
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should("have.length", "7")
    })

    it("check cell data from specific row & column", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(1)>td:nth-child(3)").contains("ceo@wolfchip.com")
    })

    it("read all the rows & columns data in the first page", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })
        })
    })

    it("pagination", () => {
        // find total number of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then((x) => {
            let value = x.text() // Showing 1 to 10 of 11742 (1175 Pages)

            totalPages = value.substring(value.indexOf("(") + 1, value.indexOf("Pages") - 1)
            cy.log("Total number of pages in a table: " + totalPages)
        })
    })

    it("pagination", () => {
        let totalPages = 5

        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log("active page is: " + p)
                cy.get(".pagination>li:nth-child(" + p + ")").click();
                cy.wait(3000)

                cy.get(".table.table-bordered.table-hover>tbody>tr").each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get("td:nth-child(3)").then((x) => {
                            cy.log(x.text()) // Email
                        })
                    })
                })
            }
        }
    })

})