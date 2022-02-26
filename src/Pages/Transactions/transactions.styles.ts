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
    height: fit-content;
`

export const Contain = styled.div`
    display: flex;
    flex-direction: column;
    width: 1120px;

    @media (max-width: 1200px) {
        width: 900px;
    }

    .btn-new-transaction {
        height: 2rem;
        border-radius: 2.5rem;
        width: 10rem;
        border: none;
        background: var(--blue-500);
        font-weight: 600;
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: var(--white);
        margin-top: 2rem;
        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    margin: 0 auto 6rem auto;

    label {
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--grey-300);
        margin-bottom: 0.2rem;
        margin-right: 0.5rem;

        &:nth-child(3) {
            margin-left: 1rem;
        }
    }

    select {
        border: 2px solid var(--white-300);
        border-radius: 0.3rem;
        height: 1.4rem;
        width: 7rem;
        font-size: 0.8rem;
        color: var(--grey-300);
        font-weight: 600;
        background: var(--white);
        cursor: pointer;

        ::placeholder {
            color: var(--grey-300);
            font-weight: 600;
        }
    }

    button {
        height: 1.4rem;
        border-radius: 2.5rem;
        width: 4rem;
        border: none;
        background: var(--blue-500);
        font-weight: 600;
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: var(--white);
        margin-left: 1rem;

        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }
`