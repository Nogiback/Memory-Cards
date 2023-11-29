import { useState } from 'react';

export default function Scoreboard({ totalScore, highScore }) {
  const [showRules, setShowRules] = useState(false);

  function toggleInfo() {
    showRules ? setShowRules(false) : setShowRules(true);
  }

  return (
    <div className='scoreboard'>
    {showRules ? (
      <div className='info-message'>
        <p id='info'>Do not click the same Pokemon twice! There are 5 rounds total! Good luck!</p>
      </div>  
      ) : (
        <div className='scores'>
          <p className='score'>Current Score: {totalScore}</p>
          <p className='score'>High Score: {highScore}</p>
        </div>
    )}
      <button onClick={toggleInfo} type='button' id='info-btn'><i className='fa-solid fa-circle-info'></i></button>
    </div>
  );
}