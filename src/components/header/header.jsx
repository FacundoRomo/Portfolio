import './header.css'
import { Logo } from '../../../public/assets/icons'
import { Presentation } from '../presentation/presentation'
import { AboutMe } from '../aboutMe/AboutMe'
import { Footer } from '../footer/Footer'
import { Proyects } from '../proyects/Proyects'
import { useRef } from 'react'
export function Header () {
  const proyects = useRef(null)
  const aboutMe = useRef(null)
  const contacto = useRef(null)
  const scrollToElement = (ref) => { ref.current.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <nav className='nav'>
        <div className='container-nav'>
          <Logo />
          <ul className='list'>
            <li className='option' onClick={() => scrollToElement(proyects)}>Proyectos</li>
            <li className='option' onClick={() => scrollToElement(aboutMe)}>Sobre mi</li>
            <li className='option' onClick={() => scrollToElement(contacto)}>Contacto</li>
            <li className='option'><a href='src/assets/RomoFacundoCV.pdf' download>Descargar CV</a></li>
          </ul>
        </div>
      </nav>
      <Presentation />
      <Proyects ref={proyects} />
      <AboutMe ref={aboutMe} />
      <Footer ref={contacto} />
    </>
  )
}
