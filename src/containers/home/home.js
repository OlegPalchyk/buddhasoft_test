import React, { Component } from 'react';
import Item from "../../components/main/listItem/item";
import {connect} from "react-redux";
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : this.props.products.items || []
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


function mapStateToProps(state) {
  const { products } = state;
  return {
    products
  }


}

export default connect(mapStateToProps)(Home);
