import styled from 'styled-components'

export const Container = styled.header`
    background: var(--white);
    padding: 0.7rem;
    border-bottom: 1px solid var(--grey-300);
`

export const DataLogo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 3rem;
    }

    p {
        font-family: 'Poppins';
        color: var(--black-500);
        font-weight: 700;
        margin-left: 0.3rem;
    }
`