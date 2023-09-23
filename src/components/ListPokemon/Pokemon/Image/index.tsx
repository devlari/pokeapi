import Image from "next/image"
import { CirclePokemon } from "./pokemon-image.styles";

type ImagePokemonProps = {
    image: string;
}

export default function ImagePokemon({image}: ImagePokemonProps) {
    return (
        <CirclePokemon>
            <Image src={image} alt="" width={50} height={50} />
        </CirclePokemon>
    )
}