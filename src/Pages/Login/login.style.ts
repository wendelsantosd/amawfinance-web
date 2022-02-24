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

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .title {
        color: var(--black-300);
        font-weight: 700;
        font-size: 1.5rem;
    }

    .question {
        color: var(--grey-400);
        font-size: 0.8rem;
        margin-top: 1.2rem;
        font-weight: 600;

        transition: filter 0.2s;
        
        span {
            color: var(--red-600);
            cursor: pointer;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    .input-email {
        height: 3rem;
        width: 22rem;
        margin: 1rem;
        font-size: 1rem;
        border: 3px solid var(--white-300);
        border-radius: 0.5rem;
        padding-left: 0.5rem;

        ::placeholder {
            color: var(--grey-300);
            font-weight: 600;
        }
    }

    .container-input-password {
        position: relative;
        display: flex;
        align-items: center;
        height: 3rem;
        width: 22rem;
        margin: 1rem;
        border: 3px solid var(--white-300);
        border-radius: 0.5rem;

        .input-password {
            position: absolute;
            width: 100%;
            height: 100%;
            border: none;
            font-size: 1rem;
            padding-left: 0.5rem;

            ::placeholder {
                color: var(--grey-300);
                font-weight: 600;
            }
            
        }

        .eye-icon {
            position: absolute;
            right: 1rem;
            font-size: 1.2rem;
            color: var(--grey-300);
            cursor: pointer;

            transition: filter 0.5s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`