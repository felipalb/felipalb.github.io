import React from 'react'
import './About.css';
import ME from '../../assets/img-1.jpg';
import { FaAward } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about">
      <h2>SOBRE MIM</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about_image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Experiência</h3>
              <h4>+4m Desenvolvedor Front-end</h4>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Certificados</h3>
              <h5>Cursando Eng. de Software - <span>Puc-Campinas</span></h5>
              <h5>Curso Desenvolvimento Web <span>Rocketseat e Potencia Tech</span></h5>

            </article>
          </div>
            <p>
            Apaixonado por tecnologia e suas vertentes. 
            Sempre disposto a encarar novos desafios e usar a criatividade para solucionar problemas.
            </p>

            <a href='#contact' className='btn btn-primary'>Vamos conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About