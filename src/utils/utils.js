function convertPokemonName(pokemonName) {
  const convertName = pokemonName
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  const newPokemonName = convertName.join(' ');

  return newPokemonName;
}

function randomizePokemon(pokemonArray) {
  let shuffledArray = [...pokemonArray];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export { convertPokemonName, randomizePokemon };
