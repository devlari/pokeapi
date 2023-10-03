import { Pokemon } from "@/modules/pokemon/types";
import PokemonView from "./Pokemon";
import { DivListPokemon } from "./list-pokemon.styles";

type ListPokemonProps = {
    pokemon: Pokemon[];
}

export default function ListPokemon({pokemon}: ListPokemonProps) {
    return (
        <DivListPokemon>
            {pokemon.map((poke) => (
                <PokemonView pokemon={poke} key={poke.id} />
            ))}
        </DivListPokemon>
    )
}