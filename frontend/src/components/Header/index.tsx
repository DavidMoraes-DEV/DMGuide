import { NavLink } from 'react-router-dom';
import '@popperjs/core';
import 'bootstrap/js/src/collapse.js';
import './style.css';
import SearchBar from '../SearchBar';
import LoginRegister from './LoginRegister';
import MenuItens from '../MenuItens';

const Header = () => {
  let statusSearch = false;
  let statusLogin = false;

  function searchBar() {
    const search = document.querySelector('#search-id');

    console.log("search: ")
    console.log(search);
    statusSearch == false
      ? search?.classList.add('click-search')
      : search?.classList.remove('click-search');

    statusSearch == false ? (statusSearch = true) : (statusSearch = false);
  }

  function loginBar() {
    const login = document.querySelector('#login-register-id');

    console.log("login Id: ")
    console.log(login?.id);
    console.log("Elemento: ")
    console.log(login);
    
    statusLogin == false
      ? login?.classList.add('click-login-register')
      : login?.classList.remove('click-login-register');

    statusLogin == false ? (statusLogin = true) : (statusLogin = false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-menu">
      <div className="container-fluid">
        <div className="dm-guide-toggler-logo">
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
        </div>
        <div className='dm-guide-header-menu-itens'>
          <MenuItens />
        </div>
        <div className="dm-guide-header-content">
          <div className="dm-guide-header-search-bar">
            <SearchBar />
          </div>
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
            onClick={loginBar}
          />

          <div
            className="dm-guide-search-container click-search"
            id="search-id"
          >
            <SearchBar />
            <div className="dm-guide-close-search">
              <button onClick={searchBar}>X</button>
            </div>
          </div>

          <div className="dm-guide-header-login-register">
            <LoginRegister />
          </div>

          <div
            className="dm-guide-navbar click-login-register"
            id="login-register-id"
          >
            <LoginRegister />
            <div className="dm-guide-return">
              <button onClick={loginBar}>X</button>
            </div>
          </div>
        </div>

        <div
          className="collapse navbar-collapse dm-guide-menu-container"
          id="dm-guide-toggler"
        >
          <MenuItens />
        </div>
      </div>
    </nav>
  );
};

export default Header;
