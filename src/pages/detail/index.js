import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddQtdyProduct from '../../components/product_controls';
import getProductById from '../../repositories/getproductsbyid';
// import { GlobalContext } from '../../services/context';

import insertPrice from '../../services/insert_price';

export default function DetailsPage(props) {
    const {id} = useParams();
    const [details, setDetails] = useState({});
    //const ctx = useContext(GlobalContext)
    
    useEffect(() => {
        getProductById({productId: id})
            .then(res => {
                const product = insertPrice(res.data[0]);
                setDetails(product);
            })
            .catch(err => console.log('err detail', err));
    }, [id]);

    return (<>
        <h1>{ details.title }</h1>
        <img src={ details.thumbnailUrl }
            aria-hidden='true'
            alt={ details.title }/>

        <p>{details.price}</p>
        <AddQtdyProduct id={id} />
    </>);
}