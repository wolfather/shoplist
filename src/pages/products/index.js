import React, { useState, useEffect } from 'react';
import ProductsList from '../../components/products_list';
import getProductsAlbumById from '../../repositories/getproductsbyalbum';
import { useParams } from 'react-router-dom';

import Loading from '../../components/loading';

import insertPrice from '../../services/insert_price';

export default function ProductsPage(props) {
    const [products, setProducts] = useState([]);
    const _fetch = getProductsAlbumById;

    const { id } = useParams();

    useEffect(() => {
        _fetch({'albumId': id || '100' })
            .then(
                res => {
                    const products = res.data.map(product => insertPrice(product))
                    setProducts(products);
                })
            .catch(error => console.log('error getByAlbumID', error));
    }, [_fetch, id]);

    return (<>
        <h1>Products</h1>

        <>{products.length ? <ProductsList products={products} /> : <Loading duration="3s" spinningColor="#fc0" /> }</>
    </>);
}