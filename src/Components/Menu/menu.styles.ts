import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 14rem;
    background: var(--white);
    padding-top: 2rem;

    .text-amaw {
        position: absolute;
        bottom: 2%;
        font-weight: 700;
        font-size: 0.7rem;
        color: var(--grey-300);
        width: 100%;
        text-align: center;
    }
`

interface OptionProps {
    isActive: boolean
}

export const Option = styled.div<OptionProps>`
    display: flex;
    justify-content: flex-start;
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