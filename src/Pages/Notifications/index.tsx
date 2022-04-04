import React from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content } from './notifications.styles'
export const Notifications = () => {
    return <Container>
        <Header isAuth />
        <Content>
            <Menu page={'notifications'} />

            <Board>
                <div>
                    <p className="time">Em 04/04/2022 às 20:00hs</p>
                    
                    <p className="message">
                        Você já gastou 10% do seu salário.
                    </p>
                </div>

                <div>
                    <p className="time">Em 04/04/2022 às 20:00hs</p>
                    
                    <p className="message">
                        Você já gastou 10% do seu salário.
                    </p>
                </div>
            </Board>
        </Content>
    </Container>
}