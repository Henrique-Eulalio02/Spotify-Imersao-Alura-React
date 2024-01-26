import '../../styles/vars.css'
import './Sidebar.css'

import Logo from '../../Assets/Images/logo-spotify.png'

const Sidebar = () => {
  return (
      <div className="sidebar">
        <nav className="sidebar__navigation">
          <div className="logo"> 
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </div>
            <div>
              <ul>
                <li>
                  <a href="">
                    <span className="fa fa-home"></span>
                    <span>Início</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-search"></span>
                    <span>Buscar</span>
                  </a>
                </li>
              </ul>
            </div>
        </nav>
      <div className="sidebar__library">
        <ul>
          <li>
            <a href="">
              <div className="container__library">
                <div>
                  <span className="fa fa-book"></span>
                  <span>Sua biblioteca</span>
                </div>
                <div>
                  <span className="fa fa-plus"></span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div className="create__playlist">
          <h1>Crie sua primeira playlist</h1>
          <span>É fácil, vamos te ajudar.</span>
          <button>Criar playlist</button>
        </div>
        <div className="cookies">
          <span>Cookies</span>
        </div>
        <div className="language">
          <button>
            <span className="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;