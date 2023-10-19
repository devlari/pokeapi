import ApiClient from "@/service/httpClient";
import { APIPokemon, APIPokemonList, Pokemon, PokemonDetails, PokemonList } from "./types";

export default class PokemonService {
  private ApiClient: ApiClient;

  constructor() {
    this.ApiClient = new ApiClient();
  }

  async get(numberPage: number): Promise<PokemonList | null> {

    const limit = 20;
    const offset = (numberPage - 1) * limit;

    try {
      const result: APIPokemonList = await this.ApiClient.get<APIPokemonList>(`/pokemon?limit=${limit}&offset=${offset}`);
      
      const data: PokemonList = {
        count: result.count,
        next: result.next,
        previous: result.previous,
        results: [],
      }

      for (const poke of result.results) {
        const pokemonDetails = await this.getDetails(poke.name);

        if (pokemonDetails) {
          data.results.push(pokemonDetails);
        }
      }

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getDetails(key: number | string, allData?: boolean): Promise<Pokemon | PokemonDetails | null> {
    try {
      const result = await this.ApiClient.get<APIPokemon>(`/pokemon/${key}`)

      if(allData) {
        const pokemonDetails: PokemonDetails = {
          id: result.id,
          name: result.name,
          image: result.sprites.front_default,
          types: result.types.map((type) => type.type.name),
          height: result.height,
          weight: result.weight,
          stats: result.stats.map((stat) => ({
            base_stat: stat.base_stat,
            effort: stat.effort,
            stat: {
              name: stat.stat.name,
            },
          })),
        }

        return pokemonDetails;
      }

      const pokemon: Pokemon = {
        id: result.id,
        name: result.name,
        image: result.sprites.front_default,
        types: result.types.map((type) => type.type.name)
      }
 
      return pokemon;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
