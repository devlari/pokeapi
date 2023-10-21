import { Pokemon } from "@/modules/pokemon/types";
import SmallCardPokemon from "../CardPokemon/Small";
import { DivListPokemon } from "./list-pokemon.styles";

type ListPokemonProps = {
    pokemon: Pokemon[];
    onClickPokemon: (pokemon: Pokemon) => void;
}

export default function ListPokemon({pokemon, onClickPokemon}: ListPokemonProps) {
    return (
        <DivListPokemon>
            {pokemon.map((poke) => (
                <SmallCardPokemon onClickPokemon={onClickPokemon} pokemon={poke} key={poke.id} />
            ))}
        </DivListPokemon>
    )
}