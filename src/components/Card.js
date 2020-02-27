import React from 'react';
import {default as emojiDictionary } from 'emoji-dictionary';
import './css/Card.css';

function Card({ text, emoji, deleteCard, index }) {

  return (
    <div className="card">
    <div onClick={() => deleteCard(index)} className='card__delete'>X</div>
    <article className="card__content">
      <p className="card__content-text">
        {text}
      </p>
      <div className="card__content-emoji">
       {emoji ? emojiDictionary.getUnicode(emoji) : null}
      </div>
    </article>
  </div>
  )
}

export default Card;