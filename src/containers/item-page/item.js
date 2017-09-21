import React, {Component} from 'react';
import Item from '../../components/item/item';
import './singleItem.css';
import {deleteItem, DELETE_PRODUCT_SUCCESS} from "../../actions/products";
import {connect} from "react-redux";
import DeleteModal from '../../components/main/listItem/deleteModal';



class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            showModal : false
        }
    }
    componentWillMount(){
        let item = this.props.products.items.find((item)=>{return item.id ===parseInt(this.props.match.params.number, 10)});

        if(!item){
            this.props.history.push('/');
        }
       this.setState({
           item
       })
    }
    deleteModal(){
        this.setState({
            showModal : true
        })
    }
    deleteItem(){
        this.props.dispatch(deleteItem(this.state.item.id));

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.products.type === DELETE_PRODUCT_SUCCESS){
            this.props.history.push('/');
        }
    }

    render() {

        return (
            this.state.item?(
                <div className="item-page">
                <Item item={this.state.item} deleteItem={()=>{this.deleteModal()}}/>
                    {this.state.showModal ? (
                        <DeleteModal item={this.state.item} cancel={()=> {
                            this.setState({showModal: false })
                        }} apply={()=> {
                            this.deleteItem(this.state.item.id)
                        }}/>
                    ) : null}
                </div>
            ):(
                <span>loading</span>
            )

        );
    }
}


function mapStateToProps(state) {
    const {products} = state;
    return {
        products
    }


}

export default connect(mapStateToProps)(ItemPage);
