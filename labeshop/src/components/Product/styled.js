import styled from "styled-components";

export const ProductContainer = styled.div`
    border: 1px solid #cac9c9;
    background-color: #cac9c9;
    display: flex;
    flex-direction: column;
    width: 213px;
    height: 360px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 200px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;

    p {
        font-family: Arial, Helvetica, sans-serif;
    }

    span {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }
`;

export const AddToCart = styled.button`
    margin-top: 7px;
    width: 100%;
    padding: 5px;
    background-color: #1eda1e;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 15px;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: #5efa5e;
    }
`;