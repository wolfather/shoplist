import React, { useState, useContext } from 'react';
import { ADD_ITEM_TO_CART, DECREMENT_PRODUCT_QTDY, INCREMENT_PRODUCT_QTDY } from '../../constants/theme';
import { GlobalContext } from '../../services/context';
import { Button, Container, InputQtdyProduct } from "./style";

export default function AddQtdyProduct(props) {
    const hasProduct = props.product !== undefined;
    const productQtdy = hasProduct ? props.product.qtdy : 1;
    const [value, setValue] = useState(productQtdy);
    const ctx = useContext(GlobalContext);
    
    const minusQtdy = () => {
        const val = value > 1 ? (value - 1) : 1;
        if(hasProduct) {
            ctx.dispatch({
                type: DECREMENT_PRODUCT_QTDY,
                payload: {id: props.id, qtdy: val}
            });
        }
        setValue(val);
    };
    const plusQtdy = () => {
        const val = value + 1;
        if(hasProduct) {
            ctx.dispatch({
                type: INCREMENT_PRODUCT_QTDY,
                payload: {id: props.id, qtdy: val}
            });
        }

        setValue(val);
    };

    const clickToBuy = () => {
        ctx.dispatch({
            type: ADD_ITEM_TO_CART,
            payload: {id: props.id, qtdy: value}
        });
    }


    return(<>
        <Container>
            <Button simbol='-' onClick={() => minusQtdy()} />
            <InputQtdyProduct 
                value={value} 
                onChange={() => setValue(0)} />
            <Button simbol='+' onClick={() => plusQtdy()} />
        </Container>
        {!hasProduct ? <button onClick={() => clickToBuy()}>Adicionar ao carrinho</button> : <></>}
    </>);
}