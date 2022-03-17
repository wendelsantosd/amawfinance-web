describe('Charts Page', () => {
    before(() => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be able to filter using select date' , () => {
        cy.visit('http://localhost:3000/charts')

        cy.get('#year').select('2021')

        cy.get('#btn-search').click()
    })
})