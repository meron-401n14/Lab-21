import React from "react";
import Card from "./Card";

import data from "../data/Fruit.json"



class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data,
    };
    this.getCard = this.getCard.bind(this);
  }


  componentDidMount() {
    
    this.setState({ deck: data  });
  }

 getCard() {
   
  
      let card = data[0];
      this.setState(st => ({
        data: [
          ...st.data,
          {
            id: card.id,
            image: card.pic,
            name: `${card.title} ${card.desc}`
          }
        ]
      }));
    }
  
  render(props) {
    const cards = this.state.data.map((c, ind) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className="Deck">
        <h1>Deck of Cards</h1>
        <button onClick={this.getCard} className="ui orange button">
          Get Card
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}


export default Deck;
