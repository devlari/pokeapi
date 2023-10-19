import styled from "styled-components";

export const InputSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const InputSearchInput = styled.input`
    margin-top: 20px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 20px;
    font-size: 18px;
    outline: none;
    margin-right: 10px;
`;

export const InputSearchButton = styled.button`
    margin-top: 20px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #EF382E;
    background-color: #EF382E;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    outline: none;
`;