import { Pokemon } from "@/modules/pokemon/types";
import { ImagePokemon, CardPokemon, IdPokemon, InfoPokemon, NamePokemon } from "./pokemon.styles";
import Image from "next/image";

type PokemonProps = {
    pokemon: Pokemon;
}

export default function PokemonView({pokemon}: PokemonProps) {

    const id = pokemon.id.toString().padStart(3, '0');

    return (
        <CardPokemon type={pokemon.types[0]}>
            <ImagePokemon>
                <Image src={pokemon.image} alt="" width={50} height={50} />
            </ImagePokemon>
            <InfoPokemon>
                <IdPokemon>
                    #{id}
                </IdPokemon>
                <NamePokemon>
                    {pokemon.name}
                </NamePokemon>
            </InfoPokemon>
        </CardPokemon>
    )
}