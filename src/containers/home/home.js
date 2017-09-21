import React, { Component } from 'react';
import Item from "../../components/main/listItem/item";
import items from '../../jsons/items.json';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : items
    };
  }

  render() {
    return (
      <div className="home-page">
        {this.state.items.map((item)=>{
          return <Link to={`/products/${item.id}`} key={item.id}><Item item={item} /></Link>
        })}
      </div>
    );
  }
}

export default Home;
