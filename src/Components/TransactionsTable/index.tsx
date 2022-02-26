import React, { useState } from 'react'

import { Container } from './transactionsTable.styles'

export const TransactionsTable = () => {
    const [transactions] = useState([
        {
            id: 1,
            description: 'Desenvolvimento de APP',
            amount: 2000,
            type: 'income',
            date: new Date('2022-02-12 09:00:00')
        },
        {
            id: 2,
            description: 'Conta de Luz',
            amount: 1000,
            type: 'expense',
            date: new Date('2022-02-12 09:00:00')
        },
    ])

    return <Container>
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => 
                    <tr key={transaction.id}>
                        <td>{transaction.description}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.date))}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </Container>
}