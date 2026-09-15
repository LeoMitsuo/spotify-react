import './Sidebar.css';
import logo from '../../assets/icons/logo-spotify.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <img src={logo} alt="Spotify" />
            </div>
            <ul>
                <li>
                    <button type="button" className="sidebar__link">
                        <span className="fa fa-home"></span>
                        <span>Início</span>
                    </button>
                </li>
                <li>
                    <button type="button" className="sidebar__link">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </button>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies">
                <button type="button" className="sidebar__link">Cookies</button>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
        </div>
    )
};

export default Sidebar;