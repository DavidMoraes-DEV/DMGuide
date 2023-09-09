import './style.css';

export function loginCardId() {
  return document.querySelector('#login-card-id');
}

//salvoooo
const LoginCard = () => {
  return (
    <div
      className="dm-guide-login-card-content ballon-icon "
      id="login-card-id"
    >
      <div className="dm-guide-login-card-icon">
        <img
          src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/login-card.png"
          alt="Login-Icon"
        />
      </div>

      <div className="dm-guide-login-card-inputs-container">
        <div className="dm-guide-login-card-input-email-container">
          <p>Email:</p>
          <input type="text" />
        </div>
        <div className="dm-guide-login-card-input-password-container">
          <p>Senha:</p>
          <input type="text" />
        </div>

        <div className="dm-guide-login-card-links">
          <a href="">
            <p>Esqueceu a Senha?</p>
          </a>
          <a href="">
            <p>Cadastrar Conta</p>
          </a>
        </div>

        <div className="dm-guide-login-card-buttons-container" id="login-card">
          <button>
            <h6>Entrar</h6>
          </button>
          <button>
            <h6>Cancelar</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
