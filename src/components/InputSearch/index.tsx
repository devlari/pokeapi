import { InputSearchButton, InputSearchContainer, InputSearchInput } from "./input-search.styles";

type InputSearchProps = {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}

export default function InputSearch({ value, onChange, onClick }: InputSearchProps) {

    function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <InputSearchContainer>
            <InputSearchInput placeholder="Pesquise por nome ou ID" type="text" value={value} onChange={(e) => onChange(e.target.value)} onKeyPress={onEnter} />
            <InputSearchButton onClick={onClick}>Pesquisar</InputSearchButton>
        </InputSearchContainer>
    )

}