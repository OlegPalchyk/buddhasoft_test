import React from "react";
import PropTypes from "prop-types";

const Item = ({item}) => {
    const {title, price, url} = item;
     return (
        <div className="product-list-item">

            <img className="product-list-item-image" src={url} alt=""/>
            <div className="product-list-detail">
                <p className="product-list-item-title">{title}</p>
                <p className="product-list-item-price">{price +" "} $</p>
            </div>

        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,

    }).isRequired
};

export default Item;
