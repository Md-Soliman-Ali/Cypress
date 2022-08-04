describe('Web Table', () => {
    it('Click segment', () => {
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'ToolsQA');
        cy.get(".card-body").eq(0).click();
    })
    it('Add Web Tables', () => {
        cy.get("#item-3").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type("Johnny");
        cy.get("#lastName").type("Sins");
        cy.get("#userEmail").type("johnnysins@test.com");
        cy.get("#age").type("25");
        cy.get("#salary").type("30000");
        cy.get("#department").type("Actress");
        cy.get("#submit").click();
    })
    it('Edit Web Tables', () => {
        cy.get("[title=Edit]").eq(0).click();
        cy.get("#lastName").clear();
        cy.get("#lastName").type("Mia Khalifa");
        cy.get("#submit").click();
    })
})