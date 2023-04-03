class Login {

    txtUserName = "input[placeholder='Username']"
    txtPassName = "input[placeholder='Password']"
    btnSubmit = "button[type='submit']"
    lblMsg = ".oxd-userdropdown-name"

    setUserName(userName) {
        cy.get(this.txtUserName).type(userName)
    }

    setPassword(password) {
        cy.get(this.txtPassName).type(password)
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin() {
        cy.get(this.lblMsg).should("have.text", "Paul Collings")
    }
}

export default Login