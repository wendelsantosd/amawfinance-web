describe('Page Login', () => {
    it('should be redirect to register page', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('#redirect-register').click()
        cy.url().should('eq', 'http://localhost:3000/register')
    })
})