import { Pokemon } from "@/modules/pokemon/types";
import { ImagePokemon, CardPokemon, InfoPokemon, ViewPokemon } from "./small-card-pokemon.styles";
import Image from "next/image";
import { TypesPokemon } from "./Types";

type PokemonProps = {
    pokemon: Pokemon;
    onClickPokemon: (pokemon: Pokemon) => void;
}

export default function SmallCardPokemon({pokemon, onClickPokemon}: PokemonProps) {

    const id = pokemon.id.toString().padStart(3, '0');

    return (
        <ViewPokemon onClick={() => onClickPokemon(pokemon)}>
            <CardPokemon type={pokemon.types[0]}>
                <ImagePokemon>
                    {/* <Image src={pokemon.image.pixel} alt="" width={100} height={100} /> */}
                </ImagePokemon>
                <InfoPokemon>
                    <span>
                        #{id}
                    </span>
                    <h3>
                        {pokemon.name}
                    </h3>
                </InfoPokemon>
                <TypesPokemon types={pokemon.types}/>
            </CardPokemon>
        </ViewPokemon>
    )
}