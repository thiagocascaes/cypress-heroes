import LoginPage from '../pages/loginPage'
import user from '../fixtures/user.json'

const loginPage = new LoginPage()

describe('Login Page', () => {

    it('Login with invalid user or password', () => {
        loginPage.accessLoginPage()
        loginPage.accessWithLogin(user.invalidUser.username, user.invalidUser.password)
        cy.get('.text-red-500').should('be.visible')
    })
        
})