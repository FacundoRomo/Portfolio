import { Proyect } from '../proyect/Proyect'
import { PROYECTS } from '../../../public/assets/proyect'
import './Proyects.css'
import { forwardRef } from 'react'

export const Proyects = forwardRef((props, ref) => {
  return (
    <>
      <main className='container proyects' ref={ref}>
        <h2 className='title'>Proyectos</h2>
        <section className='list-proyects'>
          {
          PROYECTS.map(proyect => (
            <Proyect
              key={proyect.title}
              img={proyect.img}
              descrp={proyect.descrp}
              title={proyect.title}
              url={proyect.url}
            />
          ))
        }
        </section>
      </main>
    </>
  )
})
