import { useEffect, useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.json"
import data from './helpers/data'
import Imagen from './components/Imagen'





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
          <h2>
            <span>/</span>slider
          </h2>
        </div>
        <div className='contenedor-slider'>

          {
            people.map((persona, personIndex) => {

              const { id, image } = persona;

              let position = 'nextSlide';

              if (personIndex === index) {
                position = 'activeSlide'
              }

              if(
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ){
                position = 'lastSlide'
              }

              return (
                <div className={position}>
                  <img src={image} className={position} key={id} />
                </div>
              )

            })
          }
        <div className='containerBtn'>
          <button className=' left' onClick={() => setIndex(index - 1)}>anterior</button>
          <button className=' right' onClick={() => setIndex(index + 1)}>next</button>
        </div>
        </div>

      </section>

    </>
  )
}

export default App
