export default function Modal({ gameOver, roundOver, round, playNextLevel, resetGame }){
  if (gameOver === true) {
    return (
      <div className='modal' id='lost-modal'>
        <p>You Lost!</p>
        <button onClick={resetGame} type='button' id='restart-btn'>Play Again</button>
      </div>
    );
  }

  if (roundOver === true && round <= 5) {
    return (
      <div className='modal' id='next-modal'>
        <p>You won this round!</p>
        <button onClick={playNextLevel} type='button' id='next-btn'>Play Next Level</button>
      </div>
    );
  }

  if (roundOver === true && round > 5) {
    return (
      <div className='modal' id='win-modal'>
        <p>You won the game!</p>
        <button onClick={resetGame} type='button' id='restart-btn'>Play Again</button>
      </div>
    );
  }

}