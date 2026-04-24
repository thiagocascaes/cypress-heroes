class CreatePage {
   
     selectorsList() {
        const selectors = {
            createButton: "[href='/heroes/new']",
            username: "[name='name']",
            priceNumber: "[name='price']",
            fansNumber: "[name='fans']",
            savesNumber: "[name='saves']",
            powersType: "[value='9']",
            button: "button",
            usernameField: "[name='email']",
            passwordField: "[type='password']",
            
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

    createNewHero() {
        cy.get(this.selectorsList().createButton).click()
        cy.get(this.selectorsList().username).type('Thiago')
        cy.get(this.selectorsList().priceNumber).type('99')
        cy.get(this.selectorsList().fansNumber).type('95')
        cy.get(this.selectorsList().savesNumber).type('98')
        cy.get(this.selectorsList().powersType).click()
        cy.get('.px-8').contains('button', 'Submit').click();

    }

}

export default CreatePage