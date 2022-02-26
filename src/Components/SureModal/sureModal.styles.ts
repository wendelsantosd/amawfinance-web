import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    background: var(--white);

    h2 {
        color: var(--grey-300);
        font-weight: 600;
    }

    div {
        display: flex;

        button {
            margin-top: 2rem;
            height: 2rem;
            width: 9rem;
            border: none;
            border-radius: 0.25rem;
            color: var(--white);
            font-weight: 600;
            font-size: 1rem;

            &.yes {
                background: var(--green-300);
            }

            &.no {
                background: var(--red-300);
                margin-left: 1rem;
            }
        }
    }
`