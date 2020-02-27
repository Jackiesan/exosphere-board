import React, { Component } from 'react';
import CARD_DATA from '../data/card-data.json';
import Card from './Card';
import './css/Board.css';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = ({
      cards: CARD_DATA,
    });
  }

  renderCardList = () => {
    const cardList = CARD_DATA.map((card, index) => {
      return (
        <Card
          key={index}
          index={index}
          text={card.text}
          emoji={card.emoji}
          removeCard={this.removeCard}
        />
      )
    });

    return cardList;
  }

  addCard = (newCard) => {
    const cards = this.state.cards;
    cards.push(newCard);
    this.setState({
      cards,
      message: "Successfully added Card"
    });
  }

  removeCard = (index) => {
    const cardList = this.state.cards;
    cardList.splice(index, 1);
    this.setState({
      cardList,
      message: "Successfully removed Card"
    })
  }



  render() {
    return (
      <div>
      <header> {this.state.message ? this.state.message: ""} </header>
      <header className='board-name__header'><h1>Inspiration Board</h1></header>
      <div className="board">
        {this.renderCardList()}
      </div>
      <NewCardForm addCardCallback={this.addCard} />
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
