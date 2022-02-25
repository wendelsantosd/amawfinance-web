import styled from 'styled-components'

export const GoogleButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 22rem;
    height: 3rem;
    border-radius: 2.5rem;
    border: none;
    margin: 0 1rem 1rem 1rem;

    button {
        position: absolute;
        width: 100%;
        height: 100%;
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 2px;
        color: var(--black-600);
        border: none;
        background: var(--white-400);

        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .google-icon {
        position: absolute;
        left: 1.4rem;
        font-size: 1.4rem;
    }
`