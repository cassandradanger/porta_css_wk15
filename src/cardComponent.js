import React, {Component} from 'react';
import './cardComponent.css';

class CardComponent extends Component {
  render() {
    return (
      <li className="CardComponent">
        <h2>{this.props.data.name}</h2>
        <img className="cardImg" src={this.props.data.imgUrl}/>
        <h5>{this.props.data.food}</h5>
      </li>
    );
  }
}

export default CardComponent;
