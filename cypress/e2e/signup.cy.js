const data = './cypress/e2e/data.json'

describe('Account Signup', () => {
    it('Click on signin button', () => {
        cy.visit('http://automationpractice.com');
        cy.title().should('eq', 'My Store');
        cy.get("a.login").click();
    })
    it('Register New Account', () => {
        let randid = Math.floor(Math.random() * 1000) + 1;
        let user_email = "testinfo" + randid + "@gmail.com";

        cy.readFile(data).then((obj) => {
            obj.email = user_email
            cy.writeFile(data, obj)
        })

        cy.get("#email_create").type(user_email);
        cy.get("#SubmitCreate").click();
    })
    it('Fillup Form And Register', () => {
        cy.wait(8000);
        cy.get("#id_gender1").click();
        cy.get("#customer_firstname").type("Md. Soliman");
        cy.get("#customer_lastname").type("Ali");
        cy.readFile(data).then((obj) => {
            cy.get('#passwd').type(String(obj.password));
        })

        cy.get('#days').select('3');
        cy.get('#months').select('February');
        cy.get('#years').select('1996');
        cy.get('#address1').type("Mirpur");
        cy.get('#city').type("Dhaka");
        cy.get('#id_state').select("California");
        cy.get("#postcode").type("10001");
        cy.get('#phone_mobile').type("01706994692");
        cy.get('#alias').type(" Bangladesh");
        cy.get("#submitAccount").click();
        cy.contains("Sign out")
    })
})