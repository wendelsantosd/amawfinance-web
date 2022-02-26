import React, { useState } from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content, Search } from './transactions.styles'

export const Transactions = () => {
    const [currentMonth] = useState(new Date().getMonth())
    const [currentYear] = useState(new Date().getFullYear())

    const [months] = useState(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'])
    const [years] = useState(['2021', '2022', '2023', '2024', '2025'])

    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'transactions'}/>
            <Board>
                <Search>
                    <label htmlFor='month'>Mês:</label>
                    <select id='month'>
                        {months.map((month, index) => 
                            <option 
                                key={month} 
                                value={index}
                                selected={currentMonth === index ? true : false}
                            >
                                {month}
                            </option>
                        )}
                    </select>

                    <label htmlFor='year'>Ano:</label>
                    <select id='year'>
                        {years.map(year => 
                            <option 
                                key={year} 
                                value={year}
                                selected={String(currentYear) === year ? true : false}
                            >
                                {year}
                            </option>
                        )}
                    </select>

                    <button>
                        BUSCAR
                    </button>
                </Search>
            </Board>
        </Content>
    </Container>
}