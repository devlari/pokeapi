import { Pokemon } from "@/modules/pokemon";
import { DivPokemon, IdPokemon, NamePokemon } from "./pokemon.styles";
import ImagePokemon from "./Image";

type PokemonProps = {
    pokemon: Pokemon;
}

export default function PokemonView({pokemon}: PokemonProps) {
    return (
        <DivPokemon>
            {/* <ImagePokemon image="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" /> */}
            <IdPokemon>
                {pokemon.id}
            </IdPokemon>
            <NamePokemon>
                {pokemon.name}
            </NamePokemon>
        </DivPokemon>
    )
}