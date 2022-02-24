import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 30rem;
    border-radius: 0.5rem;
    margin-top: 4rem;
    padding: 2rem;
    background: var(--white);

    .title {
        color: var(--black-300);
        font-weight: 700;
        font-size: 1.5rem;
    }

    .question {
        color: var(--grey-400);
        font-size: 0.8rem;

        transition: filter 0.2s;
        
        span {
            color: var(--red-600);
            cursor: pointer;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`