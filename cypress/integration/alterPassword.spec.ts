describe('Alter Password Page', () => {
    
    it('should be able to alter password page', () => {
        cy.visit('http://localhost:3000/alter-password/faketoken')

        cy.get('#password').type('newpassword')
            .should('have.value', 'newpassword')

        cy.get('#confirm-password').type('newpassword')
            .should('have.value', 'newpassword')

        cy.get('#btn-alter-password').click()
    })
})