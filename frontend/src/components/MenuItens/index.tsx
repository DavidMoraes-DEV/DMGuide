import { NavLink } from 'react-router-dom';
import './styles.css';

const MenuItens = () => {
  return (
    <ul className="navbar-nav offset-md- dm-guide-menu ballon-icon">
      <li>
        <img
          src="https://img.icons8.com/material-rounded/24/us-dollar.png"
          id="cifrao-icon"
          className="icon-white"
        />
        <NavLink to="/promotions" activeClassName="active" exact>
          Promoções
        </NavLink>
      </li>
      <li>
        <img
          src="https://img.icons8.com/external-others-maxicons/62/external-casino-gambling-others-maxicons.png"
          id="casino-icon"
          className="icon-white"
        />
        <NavLink to="/cassinos" activeClassName="active">
          Cassinos
        </NavLink>
      </li>
      <li>
        <img
          src="https://img.icons8.com/ios-filled/50/popular-topic.png"
          id="feedback-icon"
          className="icon-white"
        />
        <NavLink to="/feedback" activeClassName="active">
          Feedback
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuItens;
