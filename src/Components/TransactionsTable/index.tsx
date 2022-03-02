import React, { useContext, useState } from 'react'

import { Context } from '../../Contexts'
import { Container } from './transactionsTable.styles'

export const TransactionsTable = () => {
    const { transactions } = useContext(Context)

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
                {transactions?.map((transaction: any) => 
                    <tr key={transaction.id}>
                        <td>{transaction.description}</td>
                        <td className={transaction.type}>
                            {transaction.type === 'expense' ? '- ' : null}
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.created_at))}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </Container>
}