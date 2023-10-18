import { Pokemon } from "@/modules/pokemon/types";
import { ImagePokemon, CardPokemon, InfoPokemon } from "./pokemon.styles";
import Image from "next/image";
import { TypesPokemon } from "./Types";

type PokemonProps = {
    pokemon: Pokemon;
}

export default function PokemonView({pokemon}: PokemonProps) {

    const id = pokemon.id.toString().padStart(3, '0');

    return (
        <div style={{
            margin: '10px',
            display: 'flex',
        }}>
            <CardPokemon type={pokemon.types[0]}>
                <ImagePokemon>
                    <Image src={pokemon.image} alt="" width={100} height={100} />
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
        </div>
    )
}