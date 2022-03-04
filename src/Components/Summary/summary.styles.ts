import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media (max-width: 1270px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    background: var(--white-400);
    border-radius: 0.8rem;
    padding: 1rem;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        img {
            width: 30px;
            height: 30px;
        }

        p {
            font-size: 1rem;
            color: var(--grey-300);
        }
    }

    strong {
        font-weight: 700;
        color: var(--black-200);
        font-size: 2rem;
    }

    @media (max-width: 1270px) {
        margin-bottom: 1rem;
    }

     @media (max-width: 580px) {
        background: var(--white);
    }
`