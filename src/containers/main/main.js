import React, { Component } from 'react';
import {  Route, Switch } from 'react-router'
import Home from '../home/home';
import Item from '../item/item';
import CreateItem from '../createItem/createItem';

class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path='/products/:number' component={Item}/>
                <Route exact path='/create-item' component={CreateItem}/>
            </Switch>
        </main>
    );
  }
}

export default Main;
