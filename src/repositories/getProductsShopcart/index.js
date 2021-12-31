import axios from 'axios';
import getProductById from '../getproductsbyid';

export default async function getProductsShopcartRepository(props) {
    const productsFetches = props.state.shopcart.map(item => getProductById({productId: item.id}));
    const request = await axios.all(productsFetches);

    return request;
}