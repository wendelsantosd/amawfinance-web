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

export const ProfilePicture = styled.div`
    position: relative;
    height: 10rem;
    width: 10rem;
    
    img {
        position: absolute;
        height: 100%;
        border-radius: 50%;
        border: 2px solid var(--grey-300);
    }

    .camera-icon {
        position: absolute;
        font-size: 2rem;
        z-index: 1;
        color: var(--blue-500);
        bottom: 1.1rem;
        right: 0.3rem;
        cursor: pointer;
        transition: filter 0.25s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }
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

    div {
        position: relative;
        display: flex;
        justify-content: center;
        height: 2.2rem;
       border: 3px solid var(--white-300);
        border-radius: 0.3rem;
        margin-bottom: 1.2rem;

        .input-password {
            position: absolute;
            width: 100%;
            height: 100%;
            border: none;
            font-size: 1rem;
            padding-left: 0.3rem;

            ::placeholder {
                color: var(--grey-300);
                font-weight: 600;
            }
                
        }

        .eye-icon {
            position: absolute;
            right: 1rem;
            bottom: 0.3rem;
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