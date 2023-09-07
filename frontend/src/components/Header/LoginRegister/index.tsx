import { NavLink } from 'react-router-dom';
import './styles.css';

const LoginRegister = () => {
  return (
    <>
      <NavLink to="/login" activeClassName="active" exact>
        <button className="dm-guide-login-button" id='button-login'>
          <img
            src="https://img.icons8.com/clouds/100/enter-2.png"
            alt="login-icon"
          />
          <h6>Entrar</h6>
        </button>
      </NavLink>
      <NavLink to="/register" activeClassName="active">
        <button className="dm-guide-register-button" id='button-register'>
          <img
            src="https://img.icons8.com/clouds/100/add-bookmark.png"
            alt="register-icon"
          />
          <h6>Cadastrar</h6>
        </button>
      </NavLink>
    </>
  );
};

export default LoginRegister;
