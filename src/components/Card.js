import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
   }
  render() {
    return (
      <div>
        <img
          
          className="Card"
          src={this.props.pic}
          alt={this.props.title}
        />
        
      </div>
    );
  }
}
export default Card;