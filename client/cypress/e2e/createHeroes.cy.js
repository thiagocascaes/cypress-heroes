import CreatePage from "../pages/createPage"
import user from '../fixtures/user.json'

const createPage = new CreatePage()

describe('Heroes Page', () => {


    it('Create a new hero and delete hero', () => {
        createPage.accessLoginPage()
        createPage.accessWithLogin(user.validUser.username, user.validUser.password)
        createPage.createNewHero()
        createPage.selectTrash()
    })
})