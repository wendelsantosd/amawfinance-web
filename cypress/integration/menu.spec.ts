describe('Menu Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be able to redirect to profile' , () => {
        cy.get('#option-profile').click()

        cy.url().should('eq', 'http://localhost:3000/profile')
    })

    it('should be able to redirect to transactions' , () => {
        cy.get('#option-transactions').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be able to redirect to charts' , () => {
        cy.get('#option-charts').click()

        cy.url().should('eq', 'http://localhost:3000/charts')
    })

    it('should be able to redirect to login' , () => {
        cy.get('#option-logout').click()

        cy.url().should('eq', 'http://localhost:3000/login')
    })
})