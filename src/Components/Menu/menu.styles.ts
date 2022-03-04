import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    min-width: 12rem;
    max-width: fit-content;
    min-height: calc(100vh - 5rem);
    background: var(--white);
    padding-top: 2rem;

    .text-amaw-version {
        position: absolute;
        bottom: 2%;
        font-weight: 700;
        font-size: 0.7rem;
        color: var(--grey-300);
        min-width: 100%;
        text-align: center;
    }

    @media (max-width: 580px) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        z-index: 1;
        min-height: 2rem;
        padding-top: 0;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--grey-300);

        .text-amaw-version {
            display: none;
        }
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

    @media (max-width: 580px) {
        align-items: center;
        justify-content: center;
        padding: 0;
        height: 3rem;
        width: 100%;
        padding-left: 0.4rem;
        overflow: hidden;
    }
`