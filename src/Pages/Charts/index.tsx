import React, { useContext, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import { Chart } from '../../Components/Chart'
import { Chart2 } from '../../Components/Chart2'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Context } from '../../Contexts'
import api from '../../services/api'
import storage from '../../services/storage'
import { Loading } from '../../styles/utils.styles'
import { Board, Container, Content, Search } from './charts.styles'

export const Charts = () => {
    const { user } = useContext(Context)
    const [years] = useState([2021,2022,2023,2024])
    const [targetYear, setTargetYear] = useState(new Date().getFullYear())
    const [type, setType] = useState('geral')
    const [sum, setSum] = useState<object>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        submit()
    },[type])

    const submit = async () => {
        setLoading(true)

        const route = type === 'geral' ? '/transaction/list-by-user-year' : '/transaction/list-by-user-year-category'
        
        const result = await api.request({
            method: 'get',
            route,
            query: {
                id: storage.read('id') ? storage.read('id') : user.id,
                year: targetYear
            }
        })

        if(result?.status === 200) {
            setSum(result?.data)
            setLoading(false)
        }
    }

    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'charts'}/>
            <Board>
                <Search>
                    <label htmlFor='type'>Tipo:</label>
                    <select id='type'
                        onChange={event => {
                            setType(event.target.value)
                        }}
                    >
                        <option
                            value='geral'
                            selected={type === 'geral' ? true : false}
                        >
                            Geral
                        </option>

                        <option
                            value='categoria'
                            selected={type === 'categoria' ? true : false}
                        >
                            Por categoria
                        </option>
                    </select>

                    <label htmlFor='year'>Ano:</label>
                    <select id='year'
                        onChange={event => {
                            setTargetYear(Number(event.target.value))
                        }}
                    >
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

                    <button
                        id='btn-search'
                        onClick={submit}
                    >
                        BUSCAR
                    </button>
                </Search>
                {type === 'geral' ?
                    loading ?
                        <Loading style={{marginTop: '4rem'}}>
                            <ReactLoading type={'spinningBubbles'} color={'#0C6FF9'} height={'60px'} width={'60px'} />
                        </Loading>
                        :
                        <Chart
                            sum={sum}
                        />
                    :
                    loading ?
                        <Loading style={{marginTop: '4rem'}}>
                            <ReactLoading type={'spinningBubbles'} color={'#0C6FF9'} height={'60px'} width={'60px'} />
                        </Loading>
                        :
                        <Chart2
                            sum={sum}
                        />    
                }
            </Board>
        </Content>
    </Container>
}