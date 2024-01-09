import { PokemonList } from "@/modules/pokemon/types";
import ButtonPagination from "./Button";
import { StyledPaginationButtonContainer } from "./Button/button.styles";

type PaginationProps = {
    data: PokemonList;
    onPageChange: (numberPage: number) => void;
    currentPage: number;
    onPrev: () => void;
    onNext: () => void;
}

export default function Pagination({data, onPageChange, currentPage, onPrev, onNext}: PaginationProps) {    
    const { next, previous, count, results } = data;
    const fixedIntervalSize = 9;
    
    const totalPages = Math.ceil(count / results.length);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    let slicedPages = pages.slice(0, fixedIntervalSize);
    
    if (currentPage > fixedIntervalSize) {
        const startPage = Math.max(currentPage - Math.floor(fixedIntervalSize / 2), 0);
        slicedPages = pages.slice(startPage, startPage + fixedIntervalSize);
    }

    return (
        <StyledPaginationButtonContainer>
            <ButtonPagination text="Anterior" disabled={!previous} onClick={() => onPrev()} />
            {slicedPages.map((page) => (
                <ButtonPagination key={page} text={String(page)} disabled={currentPage == page} currentPage={currentPage == page} onClick={() => onPageChange(page)} />
            ))}
            <ButtonPagination text="Próximo" disabled={!next} onClick={() => onNext()} />
        </StyledPaginationButtonContainer>
    )
}