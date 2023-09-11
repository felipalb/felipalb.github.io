import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_py9mqft', 'template_3hknl8f', form.current, '0Ba-zcJd7iR5uaxC0')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Vamos conversar</h5>
      <h2>CONTATO</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <small>felipealbertosantos@outlook.com</small>
              <a href='mailto:felipealbertosantos@outlook.com'>Mande uma mensagem</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+55 (19) 999929394</h5>
              <a href='https://api.whatsapp.com/send?phone=5519999929394'>Envie uma mensagem</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Seu nome' required />
            <input type="email" name="email" placeholder='Seu e-mail' required />
            <textarea type="message" name="name" placeholder='Digite sua mensagem...' required></textarea>
            <button type="submit" className='btn btn-primary'>Enviar mensagem</button>
          </form>
      </div>
    </section>
  )
}

export default Contact