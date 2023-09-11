import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/perfil.png';
import HeaderSocials from './HeaderSocials.jsx';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou o</h5>
        <h1>Felipe Alberto</h1>
        <h5 className='text-light'>FRONT END DEVELOPER</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;