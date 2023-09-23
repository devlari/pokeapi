import { MainLayout } from "@/components/Layout/MainLayout";
import ListPokemon from "@/components/ListPokemon";
import { Pokemon } from "@/modules/pokemon";

export default function Home() {

    const pokemon: Pokemon[] = [
        {
            id: 1,
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        {
            id: 2,
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
        }
    ] 

    return (
        <MainLayout>
            <ListPokemon pokemon={pokemon} />
        </MainLayout>
    )
}