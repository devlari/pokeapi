import ApiClient from "@/service/httpClient";
import { APIPokemon, APIPokemonList, Pokemon } from "./types";

export default class PokemonService {
  private ApiClient: ApiClient;

  constructor() {
    this.ApiClient = new ApiClient();
  }

  async get(): Promise<Pokemon[] | null> {
    try {
      const result: APIPokemonList = await this.ApiClient.get<APIPokemonList>('/pokemon');
      console.log(result)

      const pokemon: Pokemon[] = [];

      for (const poke of result.results) {
        const pokemonDetails = await this.getDetails(poke.name);
        if (pokemonDetails) {
          pokemon.push(pokemonDetails);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 50000));
      return pokemon;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getDetails(key: number | string): Promise<Pokemon | null> {
    try {
      const result = await this.ApiClient.get<APIPokemon>(`/pokemon/${key}`)

      const pokemon: Pokemon = {
        id: result.id,
        name: result.name,
        image: result.sprites.front_default,
        types: result.types.map((type) => type.type.name),
      }
 
      return pokemon;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
