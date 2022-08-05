require('cypress-xpath')
const data = './cypress/e2e/data.json'

describe('Order Product', () => {

    it('Sign In', () => {
        cy.visit('http://automationpractice.com');
        cy.get("a.login").click();
        cy.readFile(data).then((obj) => {
            cy.get('#email').type(String(obj.email));
            cy.get('#passwd').type(String(obj.password));
            cy.get("#SubmitLogin").click();
        })
    })
    it('Search Product', () => {
        cy.get('#search_query_top', {
            timeout: 10000
        }).should('be.visible');
        cy.get("#search_query_top").type("shirt");
        cy.get("[name=submit_search]").click();
        cy.get(".product-container").eq(0).click();
    })
    it('Confirm Order', () => {
        cy.get("img").eq(13).click();
        cy.get("#add_to_cart").click();
        cy.wait(5000);
        cy.xpath("//span[normalize-space()='Proceed to checkout']").click();
    })
}) 