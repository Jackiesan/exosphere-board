import React, { Component } from 'react';
import emoji from 'emoji-dictionary';
import './css/Card.css';

class Card extends Component {

  getEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }

  deleteCard = (event) => {
    event.preventDefault();
    this.props.removeCard(this.props.index)
  }

  render() {
    return (
      <div className="card">
        <div onClick={this.deleteCard} className='card__delete'>X</div>
        <article className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <div className="card__content-emoji">
            {this.getEmoji()}
          </div>
        </article>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;