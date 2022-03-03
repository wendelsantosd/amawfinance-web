import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: '#fff';
    margin: 0 auto 0 auto;

     div:nth-child(2) {
         span {
             overflow: hidden;
         }

         div {
             overflow: hidden;
         }
    }

    @media(max-width: 800px) {
        height: 40%;
    }
`