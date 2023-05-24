import styled from "styled-components";

export const CartContainer = styled.div`
    padding: 15px 30px;
    margin: 10px;
    height: 100vh;
    align-self: start;
    background-color: #cac9c9;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    flex: 0.9;

    h2 {
        margin-bottom: 10px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Column2 = styled.div`
    flex: 2;
`;

export const Column1 = styled.div`
    flex: 0.9;
    text-align: right;
    margin-left: 100px;
`;

export const CheckOutButton = styled.button`
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