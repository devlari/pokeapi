import { MainLayout } from "@/Layout/MainLayout";
import InputSearch from "@/components/InputSearch";
import ListPokemon from "@/modules/pokemon/components/ListPokemon";
import LargeCardPokemon from "@/modules/pokemon/components/CardPokemon/Large";
import Pagination from "@/components/Pagination";
import PokemonService from "@/modules/pokemon/service";
import { Pokemon, PokemonList } from "@/modules/pokemon/types";
import { GetServerSideProps } from 'next';
import { useState } from "react";

type Props = {
    data: PokemonList;
}

export default function Home({ data }: Props) {
    const [dataPage, setDataPage] = useState<PokemonList>(data);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pokemonName, setPokemonName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
    const service = new PokemonService();
    
    async function handlePageChange (numberPage: number) {
        const data: PokemonList | null = await service.get(numberPage);
        setLoading(true);

        if (!data) {
            setLoading(false);
            return;
        }

        setLoading(false);
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

    async function handleBack() {
        setPokemonSelected(null);
    }

    async function searchByName() {
        const data = await service.getDetails(pokemonName.toLowerCase());

        if (!data) {
            setPokemonSelected(null);
            return;
        }

        setPokemonSelected(data);
    }

    return (
        <MainLayout>
            <InputSearch value={pokemonName} onChange={handlePokemonName} onClick={searchByName} />
            {!pokemonSelected && (
                <>
                    <Pagination data={dataPage} currentPage={currentPage} onPageChange={handlePageChange} onPrev={handlePrev} onNext={handleNext} /> 
                        <ListPokemon pokemon={dataPage.results} onClickPokemon={setPokemonSelected} />
                    <Pagination data={dataPage} currentPage={currentPage} onPageChange={handlePageChange} onPrev={handlePrev} onNext={handleNext} />  
                </>
            )}
            {pokemonSelected && (
                <LargeCardPokemon pokemon={pokemonSelected} onBack={handleBack} />
            )}           
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