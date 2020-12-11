import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        --bg-color: #1e202a;
        --grey: #34353e;
        --nav-bg-color: #13141b;
        //--home-lead-bg: #252a41;
        --home-button-bg: #16181f;
        --home-button-bg-hover: #101117;
        --pale-text-color: #8b97c6;
        --main-text-color: #e2e2e2;
        --card-bg: #252a41;
        --card-bg-hover: #394265;
        --green: #72dc72;
        --white: #f1f1f1;
        --orange: #f58620;

        --p2: calc(1rem + 1.5vw);
        
    }

    body {
        background-color: var(--bg-color);
        font-family: 'Nunito', sans-serif;
        color: #cacaca;
        font-size: 15px;
        overflow-x: hidden;
    }
    
    img {
        max-width: 100%;
    }
    
    h1 {
        margin-bottom: 2rem;
    }
    
    h2 {
        margin-bottom: 1.5rem;
    }
    
    h3 {
        margin-bottom: 0.2rem;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    p {
        margin-bottom: 0.8rem;
    }
`

export default GlobalStyle;