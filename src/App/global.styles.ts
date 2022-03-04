import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        list-style: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
    }

    :root {
        --white: #FFFFFF;
        --background: #FAF6F4;
        
        --white-300: #DDDADA;
        --white-350: #F2F2F2;
        --white-400: #F4F4F6;        
        --white-450: #F4F4F4;        
        --white-600: #F8F8F8;
        
        --black-200: #363F5F;
        --black-300: #3F4A5B;
        --black-500: #454149;
        --black-600: #323233;
        
        --grey-300: #6F8AA5;
        --grey-400: #6D7B8C;

        --red-300: #E52E4D;
        --red-600: #B22222;

        --green-300: #33CC95;

        --blue-transparent: rgba(0, 114, 229, 0.2);
        --blue-500: #0C6FF9;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    @keyframes up {
        from {
            opacity: 0;
            transform: translateY(35px);
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    .animate-up {
        transform: translateY(35px);
        opacity: 0;

        animation: up 200ms forwards;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .react-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.6);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 0.5rem;
        background: var(--white);
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.5s ease;

        &:hover {
            filter: brightness(0.8);
        }
    }

`