import { useEffect, useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import data from './helpers/data'


function App() {

  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }

    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])



  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2 className='display-4 '>
            Our Team
          </h2>
        </div>
        <div className='contenedor-slider '>
          {
            people.map((persona, personIndex) => {

              const { id, image, name, title, quote } = persona;

              let position = 'nextSlide';

              if (personIndex === index) {
                position = 'activeSlide'
              }

              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide'
              }

              return (
                <article className={position}>
                  <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <img src={image} key={id} />
                    <h4 className='fw-bold'>{name}</h4>
                    <p className="title">{title}</p>
                    <div className='text-container '>
                      <p className="title">{quote}</p>
                    </div>
                  </div>
                </article>
              )

            })
          }
          <div className='containerBtn'>
            <button className=' left' onClick={() => setIndex(index - 1)}>
            <i class="bi bi-arrow-left"></i>
            </button>
            <button className=' right' onClick={() => setIndex(index + 1)}>
            <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

      </section>

    </>
  )
}

export default App
