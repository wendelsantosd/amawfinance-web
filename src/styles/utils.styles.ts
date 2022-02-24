import styled from 'styled-components'

export const PrimaryButton = styled.button`
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