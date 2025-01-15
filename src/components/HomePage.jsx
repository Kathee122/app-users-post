import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import users_img from '../assets/images/usuarios.jpg'

const HomePage = () => {
    return (
        <>
          <Navbar />
          <div className="container">
              <h1 className='title my-5 text-center'>¡Bienvenido a nuestra Aplicación!</h1>
              <section className='row d-flex align-items-center'>
                <div className='col-lg-6 order-md-1'>
                  <img src={users_img} alt="usuarios" className='img-fluid'/>
                </div>
                <div className='col-lg-6 mb-3 order-md-0'>
                    <p className='description'>Explora nuestra aplicación diseñada para conectar personas a través de sus publicaciones. Aquí puedes:</p>
                    <ul>
                      <li>Explora una lista de usuarios únicos y conoce su contenido.</li>
                      <li>Accede a las publicaciones creadas por cada usuario y encuentra información interesante.</li>
                    </ul>
                    <div className='text-end'>
                      <Link className='btn btn-users mb-md-3' to='/users'>Explorar Usuarios</Link>
                    </div>
                </div>
              </section>
          </div>
        </>
   );
   
};

export default HomePage;
