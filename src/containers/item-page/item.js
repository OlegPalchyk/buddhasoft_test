import React, {Component} from 'react';
import items from '../../jsons/items.json';
import Item from '../../components/item/item';
import './singleItem.css';
class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
    }
    componentWillMount(){
        let item = items.find((item)=>{return item.id ===parseInt(this.props.match.params.number, 10)});
       this.setState({
           item
       })
    }

    render() {

        return (
            this.state.item?(
                <div className="item-page">
                <Item item={this.state.item}/>
                </div>
            ):(
                <span>loading</span>
            )

        );
    }
}

export default ItemPage;
