import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px 10px;
    background-color: #cac9c9;
    border-top: 2px solid #FFF;
    color: #000;
    margin-top: 85px; // FAZ COM QUE O BARRA DE PESQUISA NÃO SEJA SOBREPOSTA PELO HEADER

    input {
        font-family: Arial, Helvetica, sans-serif;
        padding: 4px 5px;
        border-radius: 5px;
        border: 1px solid #bdbcbc;
    }

    select,
    option {
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px 5px;
    border-radius: 5px;
    border: 1px solid #bdbcbc;
    }

    span {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    }
`;