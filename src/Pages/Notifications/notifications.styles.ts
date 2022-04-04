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

    div {
        width: 100%;
        border: 2px solid var(--green-300);
        padding: 1rem;
        background: ${transparentize(0.9, '#33cc95')};
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
    }
`