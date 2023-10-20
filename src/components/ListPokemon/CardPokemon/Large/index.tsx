import { Pokemon } from "@/modules/pokemon/types";
import {CardPokemon} from "./large-card-pokemon.styles"

type PokemonProps = {
    pokemon: Pokemon;
}

export default function LargeCardPokemon({pokemon}: PokemonProps) {
    return (
        <CardPokemon type={pokemon.types[0]} />
    )
}