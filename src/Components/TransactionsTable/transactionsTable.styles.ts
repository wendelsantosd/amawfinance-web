import styled from 'styled-components'

export const Container = styled.div`
    height: fit-content;

    .icon {
        cursor: pointer;
        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.8);
        }
    }
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--grey-300);
            font-size: 0.9rem;
            font-weight: 500;
            padding: 0 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        tr {
            color: var(--grey-300);
            font-weight: 500;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--white-450);
            


            &:first-child {
                border-radius: 1rem 0  0  1rem;
            }

            &:last-child {
                    border-radius: 0  1rem  1rem  0;
            }

            &.income {
                color: var(--green-300);
            }

            &.expense {
                color: var(--red-300);
            }
        }
    }
`