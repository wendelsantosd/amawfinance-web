import React, { useContext } from 'react'

import DollarIcon from '../../assets/icons/dollar.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ExpenseIcon from '../../assets/icons/outcome.svg'
import { Context } from '../../Contexts'
import { Card, Container } from './summary.styles'

export const Summary = () => {
    const { transactions } = useContext(Context)

    const summary = transactions?.reduce((acc: any, transaction: any) => {
        if (transaction?.type == 'income') {
            acc.income += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.expense += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        income: 0,
        expense: 0,
        total: 0
    })

    return <Container>
        <Card>
            <div>
                <p>Receitas</p>
                <img src={IncomeIcon} alt='Ícone de receita' />
            </div>

            <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary?.income)}
            </strong>
        </Card>
        <Card>
            <div>
                <p>Despesas</p>
                <img src={ExpenseIcon} alt='Ícone de despesa' />
            </div>

            <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary?.expense)}
            </strong>
        </Card>
        <Card>
            <div>
                <p>Total</p>
                <img src={DollarIcon} alt='Símbolo do dollar' />
            </div>

            <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary?.total)}
            </strong>
        </Card>
    </Container>
}