import React from 'react';

var FlashBackApp = function() {
  var cardData = { 
    front: {
      question: 'You may know that React was created at _________.',
      hint: 'This company\'s site is known for being written in PHP.'
    }
  };
  return (
    <div className='App'>
      <h1 className='title'>
        Flashback
      </h1>
      <p className='sub-title'>
        An interactive flashcard app.
      </p>
      <div className='card-list'>
        {Card(cardData)}
      </div>
    </div>
  );
};

var Card = function(props) {
  return (
    <div className='Card -front'>
      <div className='front'>
        <h3 className='question'>
          {props.front.question}
        </h3>
        <p className='hint'>
          <span>Hint:</span> 
          {props.front.hint}
        </p>
      </div>
    </div>
  );
};

export default FlashBackApp;