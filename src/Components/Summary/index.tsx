import React from 'react'

import DollarIcon from '../../assets/icons/dollar.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ExpenseIcon from '../../assets/icons/outcome.svg'
import { Card, Container } from './summary.styles'

export const Summary = () => {
    const summary = {
        income: 2000,
        expense: 1000,
        total: 1000.33
    }

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
                }).format(summary.income)}
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
                }).format(summary.expense)}
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
                }).format(summary.total)}
            </strong>
        </Card>
    </Container>
}