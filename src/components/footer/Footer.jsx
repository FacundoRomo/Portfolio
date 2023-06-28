import { forwardRef } from 'react'
import './Footer.css'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

export const Footer = forwardRef((props, ref) => {
  return (
    <main className='container-footer' ref={ref}>
      <section className='footer'>
        <div className='waves'>
          <div className='wave' id='wave1'> </div>
          <div className='wave' id='wave2'> </div>
          <div className='wave' id='wave3'> </div>
          <div className='wave' id='wave4'> </div>
        </div>
        <ul className='social-icons'>
          <li><a href='https://wa.me/542932507341' className='what'><FaWhatsapp /></a></li>
          <li><a href='mailto:facuuromo216@gmail.com' className='mail'><GoMail /></a></li>
          <li><a href='https://www.linkedin.com/in/facundo-romo-a11057255/' className='link'><FaLinkedin /></a></li>
        </ul>
      </section>
    </main>
  )
})
