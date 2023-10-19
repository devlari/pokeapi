import { MainLayout } from "@/Layout/MainLayout";
import ListPokemon from "@/components/ListPokemon";
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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const service = new PokemonService();
    
    async function handlePageChange (numberPage: number) {
        const data: PokemonList | null = await service.get(numberPage);

        if (!data) {
            return;
        }

        setDataPage(data);
        setCurrentPage(numberPage);
    };

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

    return (
        <MainLayout>
            <Pagination data={dataPage} currentPage={currentPage} onPageChange={handlePageChange} onPrev={handlePrev} onNext={handleNext} />            
            <ListPokemon pokemon={dataPage.results} />
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