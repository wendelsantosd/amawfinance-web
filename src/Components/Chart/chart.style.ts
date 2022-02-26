import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    background: '#fff';
    margin: 0 auto 0 auto;

    @media(max-width: 800px) {
        height: 40%;
    }
`