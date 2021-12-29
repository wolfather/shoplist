import React, { useState, useContext } from 'react';
import { ADD_ITEM_TO_CART, INCREMENT_PRODUCT_QTDY } from '../../constants/theme';
import { GlobalContext } from '../../services/context';
import { Button, Container, InputQtdyProduct } from "./style";

export default function AddQtdyProduct(props) {
    const [value, setValue] = useState(props.product.qtdy || 1);
    const ctx = useContext(GlobalContext);
    
    const minusQtdy = () => {
        const val = value > 1 ? (value - 1) : 1;
        setValue(val);
    };
    const plusQtdy = () => {
        const val = value + 1;
        if(props.product.qtdy) {
            ctx.dispatch({
                type: INCREMENT_PRODUCT_QTDY,
                payload: {id: props.id, qtdy: value}
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
            <Button simbol='-' onClick={minusQtdy} />
            <InputQtdyProduct 
                value={value} 
                onChange={() => setValue(0)} />
            <Button simbol='+' onClick={plusQtdy} />
        </Container>
        <button onClick={() => clickToBuy()}>Adicionar ao carrinho</button>
    </>);
}