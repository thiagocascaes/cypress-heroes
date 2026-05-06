class CreatePage {
   
     selectorsList() {
        const selectors = {
            createButton: "[href='/heroes/new']",
            username: "[name='name']",
            priceNumber: "[name='price']",
            fansNumber: "[name='fans']",
            savesNumber: "[name='saves']",
            powersType: "[data-cy='powersSelect']",
            button: "button",
            usernameField: "[name='email']",
            passwordField: "[type='password']",
            fileInput: "[data-cy='avatarFile']",
            trash: "[data-cy='trash']"
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
        cy.get('button').contains('Sign in').click();

    }

    createNewHero() {
        cy.get(this.selectorsList().createButton).click()
        cy.get(this.selectorsList().username).type('Thiago')
        cy.get(this.selectorsList().priceNumber).type('99')
        cy.get(this.selectorsList().fansNumber).type('95')
        cy.get(this.selectorsList().savesNumber).type('98')
        this.selectRandomPower()
        cy.get(this.selectorsList().fileInput).selectFile('cypress/fixtures/avatar.jpg', { force : true} )
        cy.get('.px-8').contains('button','Submit').click();

    }

    selectRandomPower() {
        cy.get(this.selectorsList().powersType)
        .find('option')
        .then(($option) => {
            const count = $option.length;
            const randomIndex = Math.floor(Math.random() * count);
            const randomValue = $option[randomIndex].value;
        cy.get(this.selectorsList().powersType).select(randomValue);
        });
    }


    selectTrash() {
        cy.get(this.selectorsList().trash).eq(0).click()
        cy.get('.gap-2 > .text-white').click()
    }



}

export default CreatePage