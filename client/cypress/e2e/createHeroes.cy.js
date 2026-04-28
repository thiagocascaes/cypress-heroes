import CreatePage from "../pages/createPage"
import user from '../fixtures/user.json'

const createPage = new CreatePage()

describe('Heroes Page', () => {


    it('Create a new hero', () => {
        createPage.accessLoginPage()
        createPage.accessWithLogin(user.validUser.username, user.validUser.password)
        createPage.createNewHero()
    })
})