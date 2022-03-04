import React, { useContext, useEffect, useState } from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Summary } from '../../Components/Summary'
import { TransactionModal } from '../../Components/TransactionModal'
import { TransactionsTable } from '../../Components/TransactionsTable'
import { Context } from '../../Contexts'
import { Board, Column, Contain, Container, Content, Divider, Search } from './transactions.styles'

export const Transactions = () => {
    const { targetMonth, targetYear, setTargetMonth, setTargetYear, listTransactions } = useContext(Context)
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

    const [months] = useState(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'])
    const [years] = useState(['2021', '2022', '2023', '2024', '2025'])

    const handleCloseTransactionModal = () => {
        setIsTransactionModalOpen(false)
    }

    useEffect(() => {
        submit()
    }, [])

    const submit = async () => {
        await listTransactions()
    }

    return <Container>
        <Header isAuth/>
        <Content>
            <TransactionModal 
                isOpen={isTransactionModalOpen}
                onRequestClose={handleCloseTransactionModal}
            />
            <Menu page={'transactions'}/>
            <Column>
                <Board>
                    <Contain>
                        <Search>
                            <label htmlFor='month'>Mês:</label>
                            <select 
                                id='month'
                                onChange={event => {
                                    setTargetMonth(Number(event.target.value))
                                }}
                            >
                                {months.map((month, index) => 
                                    <option 
                                        key={month} 
                                        value={index}
                                        selected={targetMonth === index ? true : false}
                                    >
                                        {month}
                                    </option>
                                )}
                            </select>

                            <label htmlFor='year'>Ano:</label>
                            <select 
                                id='year'
                                onChange={event => {
                                    setTargetYear(Number(event.target.value))
                                }}
                            >
                                {years.map(year => 
                                    <option 
                                        key={year} 
                                        value={year}
                                        selected={String(targetYear) === year ? true : false}
                                    >
                                        {year}
                                    </option>
                                )}
                            </select>

                            <button
                                onClick={submit}
                            >
                                BUSCAR
                            </button>
                        </Search>
                        <Summary />
                        <div>
                        </div>
                        <button 
                            className='btn-new-transaction'
                            onClick={() => setIsTransactionModalOpen(true)}
                        >
                            NOVA TRANSAÇÃO
                        </button>
                    </Contain>
                </Board>
                <Divider />
                <Board>
                    <Contain>
                        <TransactionsTable />
                    </Contain>
                </Board>
            </Column>
        </Content>
    </Container>
}