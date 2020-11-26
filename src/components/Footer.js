import React from 'react';
import './style/Footer.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from './img/logo.png';
import LogoGouv from './img/gouvernement-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="logo du site" />
      <a
        className="footer-logo-gouv"
        href="https://www.gouvernement.fr/info-coronavirus"
      >
        <img
          src={LogoGouv}
          alt="logo du gouvernement de la république Française"
        />
      </a>

      <p className="footerP">
        Made with <FavoriteIcon /> by Alex, Nicolas, Karen, Louise, Thomas.
      </p>
    </footer>
  );
};

export default Footer;
