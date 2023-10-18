import Image from "next/image"

type TypesPokemonProps = {
    types: string[];
}

export function TypesPokemon({types}: TypesPokemonProps) {



    return (
        <div>
            {types.map(type => {
                const src = '/icons/types/'+type;
                console.log(src)
                return (
                    <Image key={type} width={50} height={50} src={src} alt={type} />
                )
            })}
        </div>
    )
}