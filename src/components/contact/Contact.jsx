import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8pis0tm', 'template_oendvr7', form.current, 'dPlCTy7MgZTClreFe')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sanusiii1512@gmail.com</h5>
            <a href="mailto:sanusiii1512@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>uci tayo tayo</h5>
            <a href="https://m.me/uchi.uchi.90281">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+62858-2567-3382</h5>
            <a href="https://api.whatsapp.com/send?phone=+6285813673382">Send a message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" placeholder='Your message' rows="10" required></textarea>
          <button className='btn btn-primary' type='submit'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact