import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left" type="button" aria-label="Voltar">
          <img src={smallLeft} alt="" />
        </button>
        <button className="arrow-right" type="button" aria-label="Avançar">
          <img src={smallRight} alt="" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="" />
        {/* Input controlado: o valor vem do estado do App, não do DOM. */}
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          aria-label="Buscar artistas"
        />
      </div>
      <div className="header__login">
        <button className="subscribe" type="button">Inscreva-se</button>
        <button className="login" type="button">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
