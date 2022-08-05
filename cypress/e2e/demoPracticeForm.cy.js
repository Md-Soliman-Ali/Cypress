require('cypress-xpath');

describe('Fillup Web Form', () => {
    it('Fillup Web Form', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');
        cy.url().should('include', '/automation-practice-form');
       
        cy.get("#firstName").type("Test");
        cy.get("#lastName").type("User");
        
        let email = "test" + getRandomNumber(100, 999) + "@gmail.com";
        cy.get("#userEmail").type(email);
        
        cy.xpath("//label[contains(text(),'Male')]").click();
        cy.get("#userNumber").type("0170699469");
        cy.get(".custom-checkbox").eq(2).click();
        
        const filepath = 'files/demoqa.jpeg'
        cy.get('#uploadPicture').attachFile(filepath);

        cy.get("#state").click({force: true});
        cy.wait(500); 
        cy.get("#state").type("NCR");
        cy.get("#state").type('{downarrow}');
        cy.get("#state").type('{enter}');
        cy.get('#close-fixedban > img').click();
        cy.get("#closeLargeModal").click();

    })
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}