import styled from "styled-components";

export const DivPokemon = styled.div`
    width: 250px;
    height: 250px;
    margin: 20px;
    border-radius: 10px;
    background-color: #fff;
    
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

export const IdPokemon = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 5px 10px;
`;

export const NamePokemon = styled.h3`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-transform: capitalize;
`;