import React from 'react';
import { useParams } from 'react-router-dom';
import postData from '../hooks/postData';
import img_publicacion from '../assets/images/publicacion.jpg'
import Navbar from './Navbar';

const UserPost = () => {
    const { userId } = useParams(); // Obtener userId de la URL
    const posts = postData(userId); // Pasar userId al hook

    return (
      <>
        <Navbar />
        <section className="container">
          <h1 className="my-4 text-center title">Publicaciones</h1>
          <section>
            <div>
                <div className='row'>
                  {
                    posts.map((post, index) => {
                      return (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                          <div className="card h-100 card-post">
                            <div className="card-body">
                              <h5 className="card-title">{post.title}</h5>
                              <p className="card-text">{post.body}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }) 
                  }
                </div>
            </div>
          </section>
      </section>
    </>
  );
};

export default UserPost;
