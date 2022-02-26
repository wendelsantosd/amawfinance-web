import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
`

export const Board = styled.div`
    display: flex;
    justify-content: center;
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