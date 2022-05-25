import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#_">EGATOR</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimoinals">Testimoinals</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">< FaFacebookF /></a>
        <a href="https://instagram.com">< AiFillInstagram /></a>
        <a href="https://twitter.com">< IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All right reserved</small>
      </div>

    </footer>
  )
}

export default Footer