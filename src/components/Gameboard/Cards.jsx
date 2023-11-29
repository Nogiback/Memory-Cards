export default function Cards ({ pokemon, handleClick}) {
  if (pokemon.length === 0) return (<p id='loading-message'>Pokemon Loading...</p>);

  return (
    <div className='pokemon-container'>
      {pokemon.map((pokemon) => (
      <div className='pokemon-card' key={pokemon.id} onClick={handleClick}>
        <img src={pokemon.img} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </div>
      ))}
    </div>
  );
}