
import './carrusel.css'
import people from './data';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useState } from 'react';


const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  const randomPerson = () => {
    let randomNumber = Math.floor (Math.random() * people.length);
    if(randomNumber === index ){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return<article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      </div>
      <h4 className="author">{name}</h4>
      <p className="jon">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>  
      </div>
  </article>;
};

export default Review;