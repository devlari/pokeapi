import Image from "next/image"
import { DivListTypes } from "./types-pokemon.styles";

type TypesPokemonProps = {
    types: string[];
}

export function TypesPokemon({types}: TypesPokemonProps) {
    return (
        <DivListTypes>
            {types.map(type => {
                const src = `/icons/types/${type}.svg`;
                return (
                    <Image key={type} width={75} height={75} src={src} alt={type} />
                )
            })}
        </DivListTypes>
    )
}