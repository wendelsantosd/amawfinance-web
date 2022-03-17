describe('Profile Page', () => {

    before(() => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')

        cy.visit('http://localhost:3000/profile')
    })

    it('should be able to open and close modal to alter profile picture', () => {
        cy.get('#camera-icon').click()

        cy.get('#modal-profile-picture')

        cy.get('#close-modal-pf').click()
    })

    it('should be able to alter name and phone user', () => {
        cy.get('#name').clear()

        cy.get('#name').type('User Altered')
            .should('have.value', 'User Altered')

        cy.get('#phone').type('98927365488')
            .should('have.value', '(98) 92736-5488')

        cy.get('#btn-save').click()
    })

    it('should be able to alter email', () => {
        cy.get('#email').clear()

        cy.get('#email').type('useraltered@provider.com')
            .should('have.value', 'useraltered@provider.com')

        cy.get('#confirm-email').type('useraltered@provider.com')
            .should('have.value', 'useraltered@provider.com')

        cy.get('#btn-alter-email').click()
    })

    it('should be able to alter password', () => {
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#confirm-password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-alter-password').click()
    })
})