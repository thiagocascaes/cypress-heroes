import CreatePage from "../pages/createPage"
import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'

const createPage = new CreatePage()
const loginPage = new LoginPage()

describe('Heroes Page', () => {


    it('Create a new hero', () => {
        loginPage.accessLoginPage()
        loginPage.accessWithLogin(user.validUser.username, user.validUser.password)
        createPage.createNewHero(user.createHero.username)
        createPage.createNewHero(user.createHero.priceNumber)
        createPage.createNewHero(user.createHero.fansNumber)
        createPage.createNewHero(user.createHero.savesNumber)
    })
})