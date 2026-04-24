import CreatePage from "../pages/createPage"
import user from '../fixtures/user.json'

const createPage = new CreatePage()

describe('Heroes Page', () => {


    it('Create a new hero', () => {
        createPage.accessLoginPage()
        createPage.accessWithLogin(user.validUser.username, user.validUser.password)
        createPage.createNewHero(user.createHero.username)
        createPage.createNewHero(user.createHero.priceNumber)
        createPage.createNewHero(user.createHero.fansNumber)
        createPage.createNewHero(user.createHero.savesNumber)
    })
})