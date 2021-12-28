import React from 'react';

import EmptyProducts from '../emptyproducts';
import Product from '../product';

import { List, ListItem } from './style';

export default function ProductList(props) {
    const { products } = props;

    return(
        <List>
            { products.length ? products.map(product => (
                <ListItem key={product.id}>{<Product product={product} />}</ListItem>
            )) : <EmptyProducts /> }
        </List>
    );
}