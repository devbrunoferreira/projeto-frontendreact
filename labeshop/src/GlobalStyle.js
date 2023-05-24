import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    a {
    text-decoration: none;
    color: #FFF;
    }

    .add {
        margin-left: 20px;
        color: #08a508;
        cursor: pointer;
    }

    .remove {
        color: #b60303;
        cursor: pointer;
    }

    .cart_icon {
        position: relative;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;