import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
    -moz-appearance: textfield;
    }
    
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;

    h2 {
        color: var(--grey-300);
        font-weight: 600;
        margin-bottom: 2rem;
    }

    input {
        border: 3px solid var(--white-300);
        border-radius: 0.5rem;
        width: 100%;
        height: 3rem;
        color: var(--grey-300);
        font-size: 1rem;
        padding-left: 0.5rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        
        &::placeholder {
            color: var(--grey-300);
            font-size: 1rem;
        }
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 3rem;
        margin-top: 2rem;
        border-radius: 2.5rem;
        border: none;
        background: var(--blue-500);
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 2px;
        color: var(--white);

        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
        height: 3rem;
        border: 3px solid var(--white-300);
        border-radius: 0.5rem;
        color: var(--grey-300);
        font-size: 1rem;
        font-weight: 500;

        background: ${props => props.isActive ? 
        transparentize(0.9, colors[props.activeColor]) : 
        'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.5s ease;
        
        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 30px;
            height: 30px;
        }

        span {
            display: inline-block;
            margin-right: 1rem;
            font-size: 1rem;
            color: var(--text-tile);
        }
`