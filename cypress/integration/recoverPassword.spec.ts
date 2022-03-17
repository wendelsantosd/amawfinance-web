describe('Recover password Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/recover-password')
    })

    it('should be able to return a feedback send email', () => {
        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#btn-recover-password').click()

        cy.get('#message-send-email')

        cy.get('#mse-redirect-login').click()

        cy.url().should('eq', 'http://localhost:3000/login')
    })

    it('should be able redirect to login page', () => {
        cy.get('#rp-redirect-login').click()

        cy.url().should('eq', 'http://localhost:3000/login')
    })
})