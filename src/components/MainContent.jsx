import { useState, useEffect } from 'react';
import fetchPokemon from '../utils/fetchPokemon';
import { randomizePokemon } from '../utils/utils';
import Cards from './Gameboard/Cards';
import Scoreboard from './Gameboard/Scoreboard';
import Modal from './Gameboard/Modal';

export default function MainContent() {
  const [count, setCount] = useState(4);
  const [pokemon, setPokemon] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const getPokemon = async () => {
      setPokemon(randomizePokemon(await fetchPokemon(count)));
    }
    getPokemon();
  }, [count]);

  function handleClick(e) {
    e.stopPropagation();
    const pokemonName = e.target.parentNode.lastChild.textContent;
    playRound(pokemonName);
    setPokemon(randomizePokemon(pokemon));
  }

  function playRound(pokemonName) {
    if (clickedPokemon.includes(pokemonName)) {
      setGameOver(true);
    } else {
      const tempTotalScore = totalScore + 1;
      const tempRoundScore = roundScore + 1;
      if (tempTotalScore > highScore) {
        setHighScore(tempTotalScore);
      }
      if (tempRoundScore === count) {
        setTotalScore(tempTotalScore);
        setRound(round + 1);
        setRoundOver(true);
        return;
      }
      setTotalScore(tempTotalScore);
      setRoundScore(tempRoundScore);
      setClickedPokemon((clicked) => [...clicked, pokemonName]);
    }
  }

  function playNextLevel(){
    setPokemon([]);
    setClickedPokemon([]);
    setRoundScore(0);
    setCount(count + 2);
    setRoundOver(false);
  }

  function resetGame() {
    setCount(4);
    setRoundOver(false);
    setGameOver(false);
    setClickedPokemon([]);
    setRoundScore(0);
    setTotalScore(0);
    setRound(1);
    round > 5 ? setHighScore(0) : null;
  }

  return (
    <div className='main'>
      <Scoreboard totalScore={totalScore} highScore={highScore}/>
      {(gameOver || roundOver) ? (
        <Modal gameOver={gameOver} roundOver={roundOver} round={round} playNextLevel={playNextLevel} resetGame={resetGame}/>
      ) : (
        <Cards pokemon={pokemon} handleClick={handleClick}/>
      )}
    </div>
  );



}