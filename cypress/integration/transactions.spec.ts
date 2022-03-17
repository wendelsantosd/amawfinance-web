describe('Transactions Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('usertest@provider.com')
            .should('have.value', 'usertest@provider.com')
        
        cy.get('#password').type('usertest')
            .should('have.value', 'usertest')

        cy.get('#btn-auth').click()

        cy.url().should('eq', 'http://localhost:3000/transactions')
    })

    it('should be able to create a new transaction' , () => {
        cy.get('#new-transaction').click()

        cy.get('#transaction-modal')

        cy.get('#description').type('Aluguel')
            .should('have.value', 'Aluguel')

        cy.get('#amount').type('300')
            .should('have.value', '300')

        cy.get('#btn-expense').click()
        
        cy.get('#btn-save-transaction').click()
    })

    it('should able to edit a transaction' , () => {
        cy.get('#edit-transaction-icon').click()

        cy.get('#edit-transaction-modal')

        cy.get('#description').clear()

        cy.get('#description').type('Venda')
            .should('have.value', 'Venda')

        cy.get('#amount').clear()

        cy.get('#amount').type('1000')
            .should('have.value', '1000')

        cy.get('#btn-income').click()
        
        cy.get('#btn-edit-transaction').click()
    })

    it('should ble to delete a transaction' , () => {
        cy.get('#delete-transaction-icon').click()

        cy.get('#sure-modal')

        cy.get('#btn-yes')
    })

    it('should be able to filter using select date' , () => {
        cy.get('#month').select('Janeiro')

        cy.get('#year').select('2021')

        cy.get('#btn-search').click()
    })
})