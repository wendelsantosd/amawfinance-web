import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    display: flex;
`

export const Board = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    background: var(--white);
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 22rem;

    label {
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--grey-300);
        margin-bottom: 0.2rem;
    }

    input {
        border: 3px solid var(--white-300);
        border-radius: 0.3rem;
        height: 2.2rem;
        font-size: 1rem;
        color: var(--grey-300);
        font-weight: 600;
        padding-left: 0.3rem;
        margin-bottom: 1.2rem;

        ::placeholder {
            color: var(--grey-300);
            font-weight: 600;
        }
    }

    button {
        height: 2.2rem;
        border-radius: 2.5rem;
        border: none;
        background: var(--blue-500);
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 2px;
        color: var(--white);
        margin-bottom: 4rem;

        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }
`