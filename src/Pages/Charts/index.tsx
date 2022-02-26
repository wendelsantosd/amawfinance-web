import React, { useState } from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content } from './charts.styles'

export const Charts = () => {
    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'charts'}/>
            <Board>
            </Board>
        </Content>
    </Container>
}