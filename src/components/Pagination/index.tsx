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

    //WIP
    
    const { next, previous } = data;
    const fixedIntervalSize = 9;
    
    const totalPages = Math.ceil(data.count / data.results.length);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    let slicedPages = pages.slice(0, fixedIntervalSize);

    if (currentPage > fixedIntervalSize) {
        slicedPages = pages.slice(currentPage - 1, currentPage + fixedIntervalSize);
    }

    // console.log('totalPages', totalPages);
    // console.log('slicedPages', slicedPages);
    // console.log('currentPage', currentPage);

    return (
        <StyledPaginationButtonContainer>
            <ButtonPagination text="Anterior" disabled={!previous} onClick={() => onPrev()} />
            {slicedPages.map((page, i) => (
                <ButtonPagination key={page} text={String(page)} disabled={currentPage == i + 1} currentPage={currentPage == i + 1} onClick={() => onPageChange(page)} />
            ))}
            <ButtonPagination text="Próximo" disabled={!next} onClick={() => onNext()} />
        </StyledPaginationButtonContainer>
    )
}