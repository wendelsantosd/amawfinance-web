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

    img {
        margin-top: 2rem;
        border-radius: 50%;
        height: 25rem;
        width: 25rem;
    }

    div {
        display: flex;
        justify-content: center;
        width: 100%;

        button {
            position: relative;
            margin-top: 2rem;
            height: 2rem;
            width: 9rem;
            border: none;
            border-radius: 0.25rem;
            color: var(--white);
            font-weight: 600;
            font-size: 1rem;

            &.flex {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &.new {
                background: var(--green-300);
                margin-left: 1rem;
            }

            &.delete {
                background: var(--red-300);
                margin-left: 1rem;
            }

            &.save {
                background: var(--blue-500);
                margin-left: 1rem;
            }

            label {
                width: 9rem;
                height: 2rem;
                cursor: pointer;
            }

            input {
                position: absolute;
                left: -2rem;
                cursor: pointer;
                opacity: 0;
            }

            transition: filter 0.5s ease;
            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`

export const Loading = styled.div``