import React, { useState } from 'react';
import CARD_DATA from '../data/card-data.json';
import Card from './Card';
import './css/Board.css';
import NewCardForm from './NewCardForm';

function Board() {
  const [cards, setCards] = useState(CARD_DATA);

  const [message, setMessage] = useState("");

  const addCard = card => {
    console.log(card);
    const newCards = [...cards, card];
    setCards(newCards);
    setMessage('Successfully added card!');
  }

  const removeCard = index => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
    setMessage('Successfully removed card!');
  }

  return (
  <div>
    <header>{message}</header>
    <header className='board-name__header'><h1>Inspiration Board</h1></header>
    <div className="board">
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          text={card.text}
          emoji={card.emoji}
          removeCard={removeCard}
        />
      ))}
    </div>
    <NewCardForm addCardCallback={addCard} />
  </div>
  )
}

export default Board;
