
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import React, { useState } from 'react'
import photos from './photos'
import './App.css';


function App() {
  
  const [current, setCurrent] = useState(0)
  
  
  const length = photos.length

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  
  
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className='left' onClick={prev} />
      <FaArrowAltCircleRight className='right' onClick={next} />
        {photos.map((photo, i) => {
          const image = photo.image
          console.log(current, 'hello');
          return i === current && (  
            <div className={i === current ? 'photo active' : 'photo'} key={i}>
                {i === current && (
                  <img src={image} alt='Art' className='image'/>
                )}
              <div>Cost: {photo.price}</div>
            </div>
          )
        })}
    </section>
  );
}

export default App;
