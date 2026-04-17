class CreatePage {
   
     selectorsList() {
        const selectors = {
            createButton: "[href='/heroes/new']",
            usernameField: "[name='name']",
            priceNumber: "[name='price']",
            fansNumber: "[name='fans']",
            savesNumber: "[name='saves']",
            powersType: "[value='9']"
        }

        return selectors
    }
    
    accessLoginPage() {
        cy.visit('http://localhost:3000/heroes')
        cy.get("button").eq(0).click()
    }

    createNewHero(username) {
        cy.get(this.selectorsList().createButton).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().priceNumber).type('99')
        cy.get(this.selectorsList().fansNumber).type('95')
        cy.get(this.selectorsList().savesNumber).type('98')
        cy.get(this.selectorsList().powersType).click()
    }

}

export default CreatePage