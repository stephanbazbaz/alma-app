import React from 'react'
import { FilmArr } from './Constans'
const Home = () => {
  return (
    <div className='Home flex-col'>
      <div>
        <h1>Alma Hemmo</h1>
      </div>
      <div className='films-row'>
        {FilmArr.map((film, idx) =>
          <div key={`film-card-${idx}`}>
            <div className='film-pic-warp'>
              <img alt='films by alma hemmo' className='film-pic' src={film.src} />
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Home
