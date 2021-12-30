import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../services/context';
import insertPrice from '../../services/insert_price';
import AddQtdyProduct from '../../components/product_controls';
import getProductsShopcartRepository from '../../repositories/getProductsShopcart';

export default function ShopcartPage(props) {
    const [shopcart, setShopcart] = useState([]);
    const ctx = useContext(GlobalContext);
    // console.log(ctx);
    
    useEffect(() => {
        let shopcartTemp = [];
    
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

                setShopcart(shopcartTemp);
            })
            .catch(err => console.log('err shopcart', err));;
    }, [ctx]);

    console.log(shopcart);

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
            </table>
        </div>
    </>);
}

/*<button onClick={() => minusQtdy(item)}>-</button>
<span>{item.qtdy}</span>
<button onClick={() => plusQtdy(item)}>+</button>*/