import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--white);
    width: 30rem;
    height: fit-content;
    padding: 2rem;
    margin-bottom: 2rem;
    margin-top: 8rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        color: var(--black-300);
        font-size: 1.2rem;
        text-align: center;
        margin: 0.5rem;
    }

`