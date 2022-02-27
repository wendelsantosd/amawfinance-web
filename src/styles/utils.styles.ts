import styled from 'styled-components'

export const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const TextHeaderForm = styled.p`
    color: var(--black-300);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
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

    @media (max-width: 480px) {
     background: transparent;
     box-shadow: 0px 0px 0px;
    }
`

export const PrimaryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 3rem;
    border-radius: 2.5rem;
    border: none;
    margin: 1rem;
    background: var(--blue-500);
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: var(--white);

    transition: filter 0.5s ease;

    &:hover {
        filter: brightness(0.9);
    }
`

export const PrimaryInput = styled.input`
    height: 3rem;
    width: 22rem;
    margin: 1rem;
    font-size: 1rem;
    color: var(--grey-300);
    border: 3px solid var(--white-300);
    border-radius: 0.5rem;
    padding-left: 0.5rem;

    ::placeholder {
        color: var(--grey-300);
        font-weight: 600;
    }

    &.error {
        border: 3px solid var(--red-300);
    }
`
export const ErrorMessage = styled.p`
    color: var(--red-300);
    font-size: 0.8rem;
    width: 22rem;
    margin-top: -0.5rem;
`

export const ContainerPasswordInput = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 3rem;
    width: 22rem;
    margin: 1rem;
    border: 3px solid var(--white-300);
    border-radius: 0.5rem;

    &.error {
        border: 3px solid var(--red-300);
    }

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
`

export const TextQuestion = styled.p`
    color: var(--grey-400);
    font-size: 0.8rem;
    font-weight: 600;

    transition: filter 0.2s;
        
    span {
        color: var(--red-600);
        cursor: pointer;

        &:hover {
            filter: brightness(0.8);
        }
    }
`

export const Loading = styled.div`
    div {
        overflow: hidden;
    }
`