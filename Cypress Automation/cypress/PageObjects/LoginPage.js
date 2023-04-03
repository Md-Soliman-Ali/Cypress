class Login {

    setUserName(userName) {
        cy.get("input[placeholder='Username']").type(userName)
    }

    setPassword(password) {
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit() {
        cy.get("button[type='submit']").click()
    }

    verifyLogin() {
        cy.get(".oxd-userdropdown-name").should("have.text", "Paul Collings")
    }
}

export default Login