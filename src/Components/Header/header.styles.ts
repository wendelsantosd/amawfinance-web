import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
    width: 100vw;
    padding: 0.7rem;
    border-bottom: 1px solid var(--grey-300);
`

export const DataLogo = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;

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

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    cursor: pointer;

    p {
        color: var(--grey-300);
        font-weight: 600;
        margin-right: 1rem;
    }

    .profile-picture {
        border-radius: 50%;
        border: 2px solid var(--grey-300);
        height: 3rem;
    }
`