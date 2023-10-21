import { StatusBarContainer } from "./stats-bar.styles";

type StatusBarProps = {
    value: number;
}

export default function StatusBar({value}: StatusBarProps) {
    const maxValue = 225;
    return (
        <StatusBarContainer>
        </StatusBarContainer>
    )
}