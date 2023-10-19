import { StyledPaginationButton } from "./button.styles";

type NumberProps = {
    text: string;
    currentPage?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export default function ButtonPagination({text, currentPage, disabled, onClick}: NumberProps) {
    return (
        <StyledPaginationButton disabled={disabled} currentPage={currentPage} onClick={onClick}>{text}</StyledPaginationButton>
    )
}