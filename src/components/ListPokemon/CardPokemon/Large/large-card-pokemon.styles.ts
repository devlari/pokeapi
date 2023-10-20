import styled from "styled-components";

const colors = {
    bug: '#A2CE6F',
    dark: '#002E4E',
    dragon: '#53a4cf',
    // v1-> ficou muito claro
    //electric: '#FFF47B',
    // v2 -> ficou muito claro
    // electric: '#FFEF45',
    // v3 -> ficou destoante mas dá pra ler
    // electric: '#FFD700',
    // v4 -> menos pior? 
    electric: '#FFF050',
    fairy: '#FFB3C6',
    fighting: '#F79D65',
    fire: '#DD393C',
    flying: '#CAF0F8',
    ghost: '#542650',
    grass: '#52B788',
    ground: '#B08968',
    ice: '#ADE8F4',
    normal: '#E3D5CA',
    poison: '#C77DFF',
    psychic: '#FB6F92',
    rock: '#575757',
    steel: '#E5E5E5',
    water: '#48CAE4'
}

export const CardPokemon = styled.div<{type: string }>`
    border: 1px solid ${(props) => colors[props.type as keyof typeof colors] || '#fff'};
    width: 50%;
    height: 600px;
    border-radius: 10px;
    background-color: ${(props) => colors[props.type as keyof typeof colors] || '#fff'};
    position: relative;
    margin: 75px 0;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;

`;