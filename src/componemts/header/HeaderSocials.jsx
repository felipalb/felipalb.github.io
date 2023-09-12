import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/felipe-alberto-8b01a2268/' target="blank"><BsLinkedin className='header__socials-icon' /></a>
        <a href='https://github.com/felipalb' target="blank"><FaGithub className='header__socials-icon' /></a>
    </div>
  )
}

export default HeaderSocials