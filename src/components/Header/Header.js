import '../../styles/vars.css'
import './Header.css'

import ArrowLeftImage from '../../Assets/Images/small-left.png'
import ArrowRightImage from '../../Assets/Images/small-right.png'
import SearchImage from '../../Assets/Images/search.png'

const Header = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    onSearchChange(term);
  };

  return (
    <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={ArrowLeftImage} alt="" />
          </button>
          <button className="arrow-right">
            <img src={ArrowRightImage} alt="" />
          </button>
          </div>

          <div className="header__search">
            <img src={SearchImage} alt="" />
            <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" onChange={handleInputChange} />
          </div>

          <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
      </nav>
  )
}

export default Header;