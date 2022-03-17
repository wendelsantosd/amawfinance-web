describe('Register page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register')
    })

    it('should be able to register a user', () => {
        cy.get('#name').type('User Test')
            .should('have.value', 'User Test')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')

        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#confirm-password').type('usertest')
            .should('have.value', 'usertest')
        
        cy.get('#btn-register').click()

        cy.get('#message-send-emil')

        cy.get('#mse-redirect-login').click()

        cy.url().should('eq', 'http://localhost:3000/login')
    })

    it('should be able redirect to login page', () => {
        cy.get('#register-redirect-login').click()
        
        cy.url().should('eq', 'http://localhost:3000/login')
    })
})