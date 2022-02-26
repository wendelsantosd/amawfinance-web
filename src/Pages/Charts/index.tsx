import React, { useState } from 'react'

import { Chart } from '../../Components/Chart'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content, Search } from './charts.styles'

export const Charts = () => {
    const [years] = useState([2021,2022,2023,2024])
    const [currentYear] = useState(new Date().getFullYear())

    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'charts'}/>
            <Board>
                <Search>
                    <label htmlFor='year'>Ano:</label>
                    <select id='year'>
                        {years.map(year => 
                            <option
                                key={year}
                                value={year}
                                selected={year === currentYear ? true : false}
                            >
                                {year}
                            </option>    
                        )}
                    </select>

                    <button>
                        BUSCAR
                    </button>
                </Search>
                <Chart />
            </Board>
        </Content>
    </Container>
}