import './styles.css';
import LoginCard, { loginCardId } from '../../LoginCard';
import RegisterCard from '../../RegisterCard';
import { hiddenLoginCard} from '../../../util/loginBar';
import { useState } from 'react';

const LoginRegister = () => {
  //let statusRegisterCard = true;
  let statusLoginCard = false;
  const [card, setCard] = useState<Element>();;

  function updateCardLogin() {
    return card;
  }

  function cardLogin(card: Element) {
    setCard(card);
    updateCardLogin();
    return(cardLogin);
  }
  //salvooooooooo
  return (
    <>
      <button
        className="dm-guide-login-button"
        id="button-login"
        onClick={() => {
          statusLoginCard = hiddenLoginCard(statusLoginCard, loginCardId() as Element);
          console.log("statusLoginCard: ");
          console.log (statusLoginCard);
          statusLoginCard = statusLoginCard;
          console.log("Element Id: ");
          console.log(loginCardId());
          
          cardLogin(loginCardId() as Element);
        }}
      >
        <img
          src="https://img.icons8.com/android/24/checked-user-male.png"
          alt="login-icon"
        />
        <h6>Entrar</h6>
      </button>

      <div
        className="dm-guide-login-card-container"
        id="login-id"
      >
        
        {statusLoginCard ? updateCardLogin : <LoginCard />}
      </div>

      <button
        className="dm-guide-register-button"
        id="button-register"
        onClick={() => {
//          statusRegisterCard = hiddenRegisterCard(statusRegisterCard);
        }}
      >
        <img
          src="https://img.icons8.com/android/24/add-user-male.png"
          alt="register-icon"
        />
        <h6>Cadastrar</h6>
      </button>

      <div
        className="dm-guide-register-card-container click-card-loader"
        id="register-id"
      >
        <RegisterCard />
      </div>
    </>
  );
};

export default LoginRegister;
