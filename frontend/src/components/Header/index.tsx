import { NavLink } from "react-router-dom";
import "@popperjs/core";
import "bootstrap/js/src/collapse.js";
import "./style.css";

const Header = () => {
  let statusSearch = false;
  let statusLogin = false;

  function searchBar() {
    const search = document.querySelector("#search-id");

    statusSearch == false
      ? search?.classList.add("click-search")
      : search?.classList.remove("click-search");

    statusSearch == false ? (statusSearch = true) : (statusSearch = false);
  }

  function LoginBar() {
    const login = document.querySelector("#login-register-id");

    statusLogin == false
      ? login?.classList.add("click-login-register")
      : login?.classList.remove("click-login-register");

    statusLogin == false ? (statusLogin = true) : (statusLogin = false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-menu">
      <div className="container-fluid">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dm-guide-toggler"
          aria-controls="dm-guide-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavLink to="/" exact>
          <img
            src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/logo-win.png"
            alt="Logo"
            className="dm-guide-logo"
          />
        </NavLink>

        
        <div className="collapse navbar-collapse" id="dm-guide-toggler">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="dm-guide-header-content">
          <img
            src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/lupa.png"
            alt="Pesquisar Cassinos"
            id="icon-search"
            onClick={searchBar}
          />

          <img
            src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/login.png"
            alt="Entrar Cadastrar"
            id="icon-login"
            onClick={LoginBar}
          />

          <div
            className="dm-guide-search-container click-search"
            id="search-id"
          >
            <input
              type="text"
              id="input-search"
              className="dm-guide-input-search"
            />

            <div className="dm-guide-search-icon">
              <img
                src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/lupa.png"
                alt="Pesquisar Cassinos"
              />
            </div>
            <div className="dm-guide-close-search">
              <button onClick={searchBar}>X</button>
            </div>
          </div>

          <div
            className="dm-guide-navbar click-login-register"
            id="login-register-id"
          >
            <NavLink to="/login" activeClassName="active" exact>
              <button className="dm-guide-login-button">
                <img
                  src="https://img.icons8.com/clouds/100/enter-2.png"
                  alt="login-icon"
                />
                <h5>Entrar</h5>
              </button>
            </NavLink>
            <NavLink to="/register" activeClassName="active">
              <button className="dm-guide-register-button">
                <img
                  src="https://img.icons8.com/clouds/100/add-bookmark.png"
                  alt="register-icon"
                />
                <h5>Cadastrar</h5>
              </button>
            </NavLink>
            <div className="dm-guide-return">
              <button onClick={LoginBar}>X</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
