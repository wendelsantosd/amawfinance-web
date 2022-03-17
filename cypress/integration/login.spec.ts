describe('Login Page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('should be redirect to register page', () => {
        cy.get('#redirect-register').click()
        cy.url().should('eq', 'http://localhost:3000/register')
    })

    it('should be authenticate and redirect to page transactions' , () => {
        cy.get('#email').type('admin@provider.com')
            .should('have.value', 'admin@provider.com')
        
        cy.get('#password').type('admin')
            .should('have.value', 'admin')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be redirect to recover password page', () => {
        cy.get('#redirect-recover-password').click()
        cy.url().should('eq', 'http://localhost:3000/recover-password')
    })

    it('should be click in google button', () => {
        cy.get('#btn-google-auth').click()
    })
})