import React from 'react'
import { FilmArr } from './Constans'

const Projects = () => {
  return (
    <div className='Projects'>
      <h1>Projects component</h1>
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

export default Projects
