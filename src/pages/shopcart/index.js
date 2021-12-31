import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../services/context';
import insertPrice, { formatPrice } from '../../services/insert_price';
import AddQtdyProduct from '../../components/product_controls';
import getProductsShopcartRepository from '../../repositories/getProductsShopcart';
import { Link } from 'react-router-dom';

export default function ShopcartPage(props) {
    const [shopcart, setShopcart] = useState([]);
    const [totalShopcartValue, setTotalShopcartValue] = useState('R$ 0');
    const ctx = useContext(GlobalContext);

    // console.log(ctx);
    
    useEffect(() => {
        let shopcartTemp = [];
        let totalValue = 0;

        getProductsShopcartRepository(ctx)
            .then(results => {
                shopcartTemp = results.map(result => {
                    let item = result.data[0];
                    
                    ctx.state.shopcart.forEach(shopcartItem => {
                        if(parseInt(shopcartItem.id) === item.id) {
                            item = insertPrice({...item, qtdy: shopcartItem.qtdy});
                        }
                    });
                    return item;
                });

                shopcartTemp.forEach(item => totalValue += item.rawPrice);

                setShopcart(shopcartTemp);
                setTotalShopcartValue(formatPrice(totalValue));

            })
            .catch(err => console.log('err shopcart', err));
    }, [ctx]);

    return (<>
        <h1>Shopcart</h1>
        
        <div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>produto</td>
                        <td>quantidade</td>
                        <td>preço</td>
                    </tr>
                </thead>
                <tbody>
                    {shopcart.map((item) => (
                    <tr key={item.id}> 
                        <td>
                            <img src={item.thumbnailUrl} 
                                alt={item.title} />
                        </td>
                        <td>{item.title}</td>
                        <td>
                            <AddQtdyProduct 
                                id={item.id} 
                                product={item} />
                        </td>
                        <td>{item.price}</td>
                    </tr>))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan={2}>Total <strong>{totalShopcartValue}</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div>
            <Link to='/checkout'>Fechar pedido</Link>
        </div>
    </>);
}

/*<button onClick={() => minusQtdy(item)}>-</button>
<span>{item.qtdy}</span>
<button onClick={() => plusQtdy(item)}>+</button>*/