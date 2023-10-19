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
    const { next, previous } = data;
    
    const totalPages = Math.ceil(data.count / data.results.length);
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages, startPage + 9);
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <StyledPaginationButtonContainer>
            <ButtonPagination text="Anterior" disabled={!previous} onClick={() => onPrev()} />
            {pages.map(page => (
                <ButtonPagination key={page} text={String(page)} onClick={() => onPageChange(page)} />
            ))}
            <ButtonPagination text="Próximo" disabled={!next} onClick={() => onNext()} />
        </StyledPaginationButtonContainer>
    )
}