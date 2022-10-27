import React, { useState } from 'react'
import { ExperienceArr, SocialArr } from './Constants'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EXP_PIC from '../../assests/pics/experience-pic.jpg'
const Experience = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue)
  }
  return (
    <div className='Experience' style={{ display: 'flex' }}>
      <div style={{
        width: '50%'
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label='Film & Television' />
          <Tab label='Social Media' />

        </Tabs>
        <div className='experience-row flex-col'>
          {value === 0 && ExperienceArr.map((item, idx) =>
            <div key={`experience-${idx}`} className='experience-col flex-col'>
              <div className='experience-item name flex'> <div className='experience-item experience-name'>{item.name}</div> {item.company}</div>
              <div className='experience-item'>{item.title}</div>
              <div className='experience-item'>{item.description}</div>
            </div>
          )}
          {value === 1 && SocialArr.map((item, idx) =>
            <div key={`social-${idx}`} className='experience-col flex-col'>
              <div className='flex'>
                <div className='experience-item red'>{item.company}</div>
                <div className='experience-item'>{item.date}</div>
              </div>
              <div className='experience-item'>{item.title}</div>
              <div className='experience-item'>{item.description}</div>
            </div>
          )}
        </div>

      </div>
      <div style={{
        maxWidth: '50%'
      }} >

        <img alt='alma hemmo' src={EXP_PIC} style={{ width: '100%' }} />
      </div>
    </div>
  )
}

export default Experience
