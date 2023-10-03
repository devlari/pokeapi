export type APIPokemonList = {
    count: number;
    next: string;
    previous: string;
    results: APIPokemon[];
};

export type APIPokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    },
    types: {
        type: {
            name: string;
        };
    }[];
}

export type Pokemon = {
    id: number,
    name: string,
    types: string[],
    image: string,
} 

export type PokemonDetails = {
    //to-do
}