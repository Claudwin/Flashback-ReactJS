import React from 'react';

const cardData = { 
  front: {
    question: 'You may know that React was created at _________.',
    hint: 'This company\'s site is known for being written in PHP.'
  }
};

const Card = (props) => {
  return(
    <div className="Card -front">
      <div className="front">
        <h3 className="question">
          {props.front.question}
        </h3>
        <p className="hint">
          <span>Hints: </span>  
          {props.front.hint}
        </p>
      </div>
    </div>
  )
}

export default Card;