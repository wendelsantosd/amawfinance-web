import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 12rem;
    background: var(--white);
    padding-top: 2rem;
`

interface OptionProps {
    isActive: boolean
}

export const Option = styled.div<OptionProps>`
    display: flex;
    justify-content: center;
    font-size: 1rem;        
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;

    color: ${props => props.isActive ? 
        '#0C6FF9'
        :
        '#6F8AA5'};

    background: ${props => props.isActive ?
        'rgba(0, 114, 229, 0.2)'
        :
        'transparent'};

    p {
        font-weight: 700;
        margin-left: 0.5rem;
    }

    &:hover {
        background: var(--white-350);
        color: var(--black-300);
    }
`