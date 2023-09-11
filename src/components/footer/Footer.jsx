import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#footer' className='footer__logo'>Felipe Alberto</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>

      <div className="footer__copyright">
        <small>Felipe Alberto &copy; 2023</small>
      </div>

    </footer>
  )
}

export default Footer;