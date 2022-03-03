import React, { useContext, useEffect, useState } from 'react'

import { Chart } from '../../Components/Chart'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Context } from '../../Contexts'
import api from '../../services/api'
import storage from '../../services/storage'
import { Board, Container, Content, Search } from './charts.styles'

export const Charts = () => {
    const { user } = useContext(Context)
    const [years] = useState([2021,2022,2023,2024])
    const [targetYear] = useState(new Date().getFullYear())
    const [sum, setSum] = useState<object>()

    useEffect(() => {
        (async () => {
            const result = await api.request({
                method: 'get',
                route: '/transaction/list-by-user-year',
                query: {
                    id: storage.read('id'),
                    year: targetYear
                }
            })

            if (result?.status === 200) {
                setSum(result?.data)
            }
        })()
    },[])

    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'charts'}/>
            <Board>
                <Search>
                    <label htmlFor='year' onClick={() => console.log(sum)}>Ano:</label>
                    <select id='year'>
                        {years.map(year => 
                            <option
                                key={year}
                                value={year}
                                selected={year === targetYear ? true : false}
                            >
                                {year}
                            </option>    
                        )}
                    </select>

                    <button>
                        BUSCAR
                    </button>
                </Search>
                <Chart 
                    sum={sum}
                />
            </Board>
        </Content>
    </Container>
}