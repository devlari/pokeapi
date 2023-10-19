import { StyledPaginationButton } from "./button.styles";

type NumberProps = {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function ButtonPagination({text, disabled, onClick}: NumberProps) {
    return (
        <StyledPaginationButton disabled={disabled} onClick={onClick}>{text}</StyledPaginationButton>
    )
}