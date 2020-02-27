import React, { useState } from 'react';
import './css/NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

function NewCardForm({ addCardCallback }) {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!text && !emoji) return;
    addCardCallback({text, emoji});
    setText("");
    setEmoji("");
  }

  return (
    <form onSubmit={handleSubmit} className='new-card-form'>
    <header className='new-card-form__header'><h1>Add a note</h1></header>
    <div className='new-card-form__form'>
    <label htmlFor='text' className='new-card-form__form-label'>Text: </label>
    <textarea
      name='text'
      value={text}
      onChange={e => setText(e.target.value)}
      className='new-card-form__form-textarea'
    />
    <select name='emoji'  onChange={e => setEmoji(e.target.value)}
    value={emoji}
    className='new-card-form__form-select' >
      <option value=''>Add Emoji</option>
      <option value={EMOJI_LIST[0]}>None</option>
      <option value={EMOJI_LIST[1]}>😍</option>
      <option value={EMOJI_LIST[2]}>🍺</option>
      <option value={EMOJI_LIST[3]}>👏</option>
      <option value={EMOJI_LIST[4]}>💖</option>
      <option value={EMOJI_LIST[5]}>😻</option>
      <option value={EMOJI_LIST[6]}>🐶</option>
    </select>
    <input type='submit' value='Add Card' className='new-card-form__form-button' />
    </div>

    </form>
  )
}

export default NewCardForm;