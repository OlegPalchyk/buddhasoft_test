import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/item'>Item</Link></li>
              <li><Link to='/create-item'>Create Item</Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
