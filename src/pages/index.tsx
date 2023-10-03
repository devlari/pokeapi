import Header from "@/components/Header";
import ListPokemon from "@/components/ListPokemon";
import PokemonService from "@/modules/pokemon/service";
import { Pokemon } from "@/modules/pokemon/types";
import { GetServerSideProps } from 'next';

type Props = {
    pokemonList: Pokemon[]
}

export default function Home({ pokemonList }: Props) {

    return (
        <div>
            <Header />
            <ListPokemon pokemon={pokemonList} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const service = new PokemonService();

    const pokemonList: Pokemon[] | null = await service.get();

    return {
        props: {
            pokemonList
        }
    }
}