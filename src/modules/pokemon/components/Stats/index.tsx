import StatusBar from "./Bar";
import { StatsContainer, StatsName } from "./stats.styles";

type Props = {
    stats: {
        name: string;
        base_stat: number;
    }[]
}

const StatsPort = [
    {
        name: 'hp',
        translate: 'HP',
    },
    {
        name: 'attack',
        translate: 'Ataque',
    },
    {
        name: 'defense',
        translate: 'Defesa',
    },
    {
        name: 'special-attack',
        translate: 'Ataque Especial',
    },
    {
        name: 'special-defense',
        translate: 'Defesa Especial',
    },
    {
        name: 'speed',
        translate: 'Velocidade',
    },
]

export default function Stats({stats}: Props) {

    
    return (
        <StatsContainer>
            <StatsName>
                {stats.map(stat => {
                    const name = StatsPort.find(item => item.name === stat.name)?.translate;
                    
                    return (
                        <>
                            <h5 style={{margin: '5px'}} key={name}>{name}: {stat.base_stat}</h5>
                            <StatusBar value={stat.base_stat} key={stat.name} />
                        </>
                    )
                })}
            </StatsName>
        </StatsContainer>
    )

}