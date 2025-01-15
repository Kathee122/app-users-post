import React from 'react'
import error_img from '../assets/images/error.jpg'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container'>
        <h1 className='title my-5'>"¡Oops! Algo salió mal..."</h1>
        <div className='text-center'>
          <Link className='btn btn-users mb-md-3' to='/'>Volver al inicio</Link>
        </div>
        <figure>
          <img src={error_img} alt="pagina no encontrada" className='img-fluid'/>
          <figcaption className='text-center description'>
            Parece que esta página se perdió en el ciberespacio. Pero no te preocupes, te ayudaremos a encontrar el camino.
          </figcaption>
        </figure>
    </div>
  )
}
