import React from 'react';

const Imagen = (persona,position,) => {
    return (
        <article className='img-container'>
            <div >
                <img src={persona.image} alt="" className={position} />
                <p>{persona.title}</p>
            </div>
        </article>
    );
};

export default Imagen;