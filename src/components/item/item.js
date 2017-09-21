import React from "react";
import PropTypes from "prop-types";
import { Grid, Col} from 'react-bootstrap';


const Item = ({item}) => {
    const {title, price, url , description} = item;
     return (
         <Grid>
             <Col xs={12} md={4} lg={3} >
                 <img className="single-item-image" src={url} alt=""/>
             </Col>
             <Col xs={12} md={8} lg={9}>
                 <p className="single-item-title">{title}</p>
                 <p className="single-item-price">{price +" "} $</p>
                 <p className="single-item-description">{description} $</p>
             </Col>
         </Grid>

    );
};

Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description : PropTypes.string.isRequired

    }).isRequired
};

export default Item;
