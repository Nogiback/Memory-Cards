import logo from '../assets/PokemonLogo.png';
import gameNameLogo from '../assets/GameLogo.png';

export default function Header() {
  return (
    <header>
      <img id='main-logo' src={logo} alt='Pokemon Logo' />
      <img id='game-logo' src={gameNameLogo} alt='Game Logo' />
    </header>
  );
}