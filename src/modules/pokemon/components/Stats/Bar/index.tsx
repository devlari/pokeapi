import { StatusBarContainer, Bar } from "./stats-bar.styles";

type StatusBarProps = {
    value: number;
}

export default function StatusBar({value}: StatusBarProps) {
    const maxValue = 225;
    
    const bars = 15;
    const coloredBars = Math.floor(value / maxValue * bars);

    console.log(coloredBars);

    return (
        <StatusBarContainer>
            {Array.from({length: bars}, (_, index) => {
                return <Bar key={index} color={coloredBars >= index ? "#039403" : "#ddd"} />
            })}
        </StatusBarContainer>
    )
}