describe('Charts Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be able to redirect to /' , () => {
        cy.get('#data-logo').click()

        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should be able to redirect to profile' , () => {
        cy.get('#info').click()

        cy.url().should('eq', 'http://localhost:3000/profile')
    })
})