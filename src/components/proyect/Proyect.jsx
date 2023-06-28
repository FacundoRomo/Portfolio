import './Proyect.css'

export function Proyect ({ img, title, descrp, url }) {
  return (
    <section className='container-proyect'>
      <img src={img} alt='ecommerce' className='img-proyect' />
      <div className='content-proyect'>
        <h2 id='#proyecto' className='title-proyect'>{title}</h2>
        <span className='text-img'>{descrp}</span>
        <a href={url} target='_blank' className='visit text-img' rel='noreferrer'>Visitar {'>'}</a>
      </div>
    </section>

  )
}
