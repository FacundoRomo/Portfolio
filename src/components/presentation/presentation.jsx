import './presentation.css'
import Typewriter from 'typewriter-effect'

export function Presentation () {
  return (
    <>
      <main className='container-presentation'>
        <div className='content'>
          <aside className='presentation'>
            <span className='first-text'>Me llamo Facundo Romo </span>
            <span className='first-text'>y soy</span>
          </aside>
          <div className='texts'>
            <Typewriter
              options={{
                strings: [
                  'Programador',
                  'Desarrollador'
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2000
              }}
            />
          </div>
        </div>
        <aside>
          <img src='public\assets\programming.svg' alt='' className='logo-presentation' />
        </aside>
      </main>
    </>
  )
}
