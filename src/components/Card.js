import React from 'react';
import '../styles/Card.css';

const Card = ({name, birth, image, homeworld}) => {
    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{name}</div>
          	<img src={image} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{birth}</span>
            </p>
            <p>
                <span>Homeworld:</span>
                <span>{homeworld}</span>
            </p>
        </div>
    </div>

    );
};

export default Card;
