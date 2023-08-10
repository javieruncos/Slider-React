import { useEffect, useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.json"
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

  // useEffect(()=>{

  // },[index])
   console.log(people.length-1)

  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className='section-center'>
          {
            people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              let position = "nextSlide"
              if (personIndex === index) {
                position = "activeSlide"
              }
              if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                position = "lastSlide"
              }

              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className='person-img' />
                  <h4>{name}</h4>
                  <p className='titel'>{title}</p>
                  <p className='text'>{quote}</p>
                </article>
              )
            })
          }
          <button className='prev btn btn-primary' onClick={()=>{setIndex(index-1)}}>
           last
          </button>
          <button className='next btn btn-primary' onClick={()=>{setIndex(index+1)}}>
             next
          </button>
        </div>
      </section>

    </>
  )
}

export default App
