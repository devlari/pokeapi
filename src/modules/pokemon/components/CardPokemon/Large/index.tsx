import { Pokemon } from "@/modules/pokemon/types";
import { BackButton, CardPokemon, CardHeader, CardContent, ListTypes } from "./large-card-pokemon.styles"
import { IoCaretBackCircleSharp } from "react-icons/io5"; 
import Image from "next/image";
import Stats from "../../Stats";

type PokemonProps = {
    pokemon: Pokemon;
    onBack: () => void;
}

export default function LargeCardPokemon({pokemon, onBack}: PokemonProps) {

    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <CardPokemon type={pokemon.types[0]}>
            <CardHeader>
                <BackButton onClick={onBack}>
                    <IoCaretBackCircleSharp size={50} color="#fff" />
                </BackButton>
                <h2 style={{color: "#fff"}}>#{pokemon.id.toString().padStart(3, '0')} — {name}</h2>
                <div style={{width: '50px'}}></div>
            </CardHeader>
            <CardContent>
                    <Image src={pokemon.image.vector} height={300} width={300} alt={pokemon.name} style={{padding: '10px'}} />
                    <ListTypes>
                        {pokemon.types.map(type => {
                            const src = `/icons/types/detailed/${type}.svg`;
                            return (
                                <Image key={type} width={150} height={50} src={src} alt={type} />
                            )
                        })}
                    </ListTypes>
                    <Stats stats={pokemon.stats}/>
            </CardContent>
        </CardPokemon>
    )
}