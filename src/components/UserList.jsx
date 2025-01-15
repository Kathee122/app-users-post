import React from 'react';
import { Link } from 'react-router-dom';
import userData from '../hooks/UserData';
import img_user from '../assets/images/usuario.png'
import Navbar from './Navbar';

const UserList = () => {
    const users = userData(); // Usa el hook para obtener datos

    return (
        <>
            <Navbar />
            <section className='container'>
                <h1 className='my-5 title'>Lista de Usuarios</h1>
                <section className='row'>
                    {
                        users.map((user, index) => {
                            return(
                                <div key={index} className='col-lg-4 col-md-6 text-center mb-3'>
                                    <img src={img_user} alt="" className='img-fluid'/>
                                    <h4 className='pt-3'>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <Link className='btn btn-post mb-3' to={`/posts/${user.id}`}> Ver Publicaciones </Link>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </>
    );
};

export default UserList;

