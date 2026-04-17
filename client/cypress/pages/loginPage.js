class LoginPage {

    selectorsList() {
        const selectors = {
            button: "button",
            usernameField: "[name='email']",
            passwordField: "[type='password']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/heroes')
        cy.get("button").eq(0).click()

    }

    accessWithLogin(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().button).eq(17).click()

    }

    heroesListing() {
        cy.get('.flex-wrap').should('be.visible');
    }

}

export default LoginPage