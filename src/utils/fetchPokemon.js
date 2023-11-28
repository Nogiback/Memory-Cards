import { convertPokemonName } from './utils.js';

export default async function fetchPokemon(count) {
  const pokemonList = [];
  const maxNumberOfPokemon = 1009;
  const randomIndex = Math.floor(Math.random() * (maxNumberOfPokemon - 1)) + 1;

  for (let i = randomIndex; i < count + randomIndex; i++) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(pokemonURL);
    const pokemon = await response.json();
    const id = pokemon.id;
    const name = convertPokemonName(pokemon.name);
    const img = pokemon.sprites.front_default;
    pokemonList.push({ id, name, img });
  }
  return pokemonList;
}
