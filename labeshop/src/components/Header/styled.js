import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    background-color: #001316;
    position: fixed; // FIXA O HEADER
    top: 0;
    left: 0;
    right: 0;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
`;

export const HeaderSingIn = styled.div`
    font-size: 17px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export const Badge = styled.button`
    position: absolute;
    left: 180px;
    top: 40px;
    background-color: #f04040;
    padding: 5px;
    border-radius: 50px;
    margin-left: 2px;
    border: none;
    color: #ffffff;
    width: 1.5rem;
    font-size: 13px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
`;