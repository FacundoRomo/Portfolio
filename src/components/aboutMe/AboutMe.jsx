import { forwardRef } from 'react'
import './AboutMe.css'

export const AboutMe = forwardRef((props, ref) => {
  return (
    <>
      <section className='container about' ref={ref}>
        <h2 className='title about-title'>Sobre mi</h2>
        <div className='container-descrp'>
          <p className='description'>¡Hola! Soy un desarrollador front-end entusiasta y
            aunque soy nuevo en la industria, he adquirido experiencia trabajando en varios proyectos por mi cuenta.
            Creo firmemente que la comunicación clara y concisa es fundamental para el éxito de cualquier proyecto,
            además, disfruto colaborando en equipo y aprendiendo de otros profesionales.
            Me apasiona encontrar soluciones creativas a desafíos complejos y me esfuerzo por mantenerme actualizado sobre las últimas tendencias y mejores prácticas en el campo.
            <p><span className='description'>Mi objetivo principal es obtener mi primer oportunidad para demostrar todo lo adquirido en el ambito laboral</span></p>
          </p>
        </div>
      </section>
    </>
  )
})
