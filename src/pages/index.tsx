import { MainLayout } from "@/Layout/MainLayout";
import InputSearch from "@/components/InputSearch";
import ListPokemon from "@/components/ListPokemon";
import Pagination from "@/components/Pagination";
import PokemonService from "@/modules/pokemon/service";
import { Pokemon, PokemonDetails, PokemonList } from "@/modules/pokemon/types";
import { GetServerSideProps } from 'next';
import { useState } from "react";

type Props = {
    data: PokemonList;
}

export default function Home({ data }: Props) {
    const [dataPage, setDataPage] = useState<PokemonList>(data);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pokemonName, setPokemonName] = useState<string>('');
    const [pokemonSelected, setPokemonSelected] = useState<PokemonDetails | null>(null);
    const service = new PokemonService();
    
    async function handlePageChange (numberPage: number) {
        const data: PokemonList | null = await service.get(numberPage);

        if (!data) {
            return;
        }

        setDataPage(data);
        setCurrentPage(numberPage - 1);
    };

    async function handlePokemonName(value: string) {
        if (value === '') {
            setPokemonSelected(null);
        }

        setPokemonName(value.toLowerCase())
    }

    async function handlePrev() {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    }

    async function handleNext() {
        if (currentPage < dataPage.count) {
            handlePageChange(currentPage + 1);
        }
    }

    async function searchByName() {
        const data = await service.getDetails(pokemonName.toLowerCase(), true);

        if (!data || !('stats' in data)) {
            setPokemonSelected(null);
            return;
        }

        setPokemonSelected(data);
    }

    return (
        <MainLayout>
            <InputSearch value={pokemonName} onChange={handlePokemonName} onClick={searchByName} />
            <Pagination data={dataPage} currentPage={currentPage} onPageChange={handlePageChange} onPrev={handlePrev} onNext={handleNext} />            
            <ListPokemon pokemon={pokemonSelected ? [pokemonSelected] : dataPage.results} />
            <Pagination data={dataPage} currentPage={currentPage} onPageChange={handlePageChange} onPrev={handlePrev} onNext={handleNext} />  

        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const service = new PokemonService();

    const data: PokemonList | null = await service.get(1);

    return {
        props: {
            data
        }
    }
}