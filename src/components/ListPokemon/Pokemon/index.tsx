import { Pokemon } from "@/modules/pokemon/types";
import { DivPokemon, IdPokemon, NamePokemon } from "./pokemon.styles";
import ImagePokemon from "./Image";

type PokemonProps = {
    pokemon: Pokemon;
}

export default function PokemonView({pokemon}: PokemonProps) {
    return (
        <DivPokemon>
            <ImagePokemon image={pokemon.image} />
            <IdPokemon>
                {pokemon.id}
            </IdPokemon>
            <NamePokemon>
                {pokemon.name}
            </NamePokemon>
        </DivPokemon>
    )
}