import React, { useContext } from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Context } from '../../Contexts'
import { Board, Container, Content, Notification } from './notifications.styles'
export const Notifications = () => {
    const { notifications } = useContext(Context)
    return <Container>
        <Header isAuth />
        <Content>
            <Menu page={'notifications'} />

            <Board>
                {notifications?.map((notification: any) => 
                    <Notification
                        key={notification.id}
                        isGreen={notification.percentage < 30}
                        isYellow={notification.percentage >= 30 && notification.percentage < 50}
                        isOrange={notification.percentage >= 50 && notification.percentage < 80}
                        isRed={notification.percentage >= 80}
                    >
                        <p className="time"> 
                            {`Em 
                            ${new Intl.DateTimeFormat('pt-BR').format(new Date(notification.created_at))}
                            às
                            ${new Date(notification.created_at).getHours()}:${new Date(notification.created_at).getMinutes()}hs`}
                        </p>
                        <p className="message">
                            {notification.message}.
                        </p>
                    </Notification>
                )}
            </Board>
        </Content>
    </Container>
}