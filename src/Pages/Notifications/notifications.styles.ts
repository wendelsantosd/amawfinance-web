import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column
`

export const Content = styled.div`
    display: flex;

    @media (max-width: 580px) {
        flex-direction: column;
    }
`

export const Board = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    background: var(--white);
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 580px) {
     background: transparent;
     box-shadow: 0px 0px 0px;
    }
`

interface NotificationProps {
   isGreen: boolean;
   isYellow: boolean;
   isOrange: boolean;
   isRed: boolean;
}

export const Notification = styled.div<NotificationProps>`
        width: 100%;
        border: ${props => {
        if (props.isGreen) {
            return '2px solid #33cc95'
        } else if (props.isYellow) {
            return '2px solid #ffff40'
        } else if (props.isOrange) {
            return '2px solid #ed9121'
        } else if (props.isRed) {
            return '2px solid #e52e4d'
        }
    }};

        padding: 1rem;
        background: ${props => {
        if (props.isGreen) {
            return transparentize(0.9, '#33cc95')
        } else if (props.isYellow) {
            return transparentize(0.9, '#ffff40')
        } else if (props.isOrange) {
            return transparentize(0.9, '#ed9121')
        } else if (props.isRed) {
            return transparentize(0.9, '#e52e4d')
        }
    }};
        margin-bottom: 1rem;

        .time {
            font-size: .8rem;
            margin-bottom: 1rem;
            color: var(--grey-300);
        }

        .message {
            color: var(--grey-300);
            font-weight: 700;
        }
`