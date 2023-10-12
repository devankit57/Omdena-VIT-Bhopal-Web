import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className='omdena__header section__padding' id="#home">
      <div className='omdena__header-content'>
          <h1 className='gradient__text'>Open-source AI projects to solve challenges faced by the local community.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

          <div className='omdena__header-content__people'>
              <img src={people} />
              <p>1600 people already following omdena vit bhopal </p>
          </div>

          
      </div>
      <div className='omdena__header-image'>
              <img src={ai} alt="ai" />
          </div>

    </div>
  )
}

export default Header