import React, { useState, useContext } from 'react';
import { ADD_ITEM_TO_CART } from '../../constants/theme';
import { GlobalContext } from '../../services/context';
import { Button, Container, InputQtdyProduct } from "./style";

export default function AddQtdyProduct(props) {
    const [value, setValue] = useState(1);
    const ctx = useContext(GlobalContext);
    
    const minusQtdy = () => {
        const val = value > 1 ? (value - 1) : 1;
        setValue(val);
    };
    const plusQtdy = () => {
        const val = value + 1;
        setValue(val);
    };

    const clickToBuy = e => {
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