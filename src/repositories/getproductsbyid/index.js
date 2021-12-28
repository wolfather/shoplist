import axios from 'axios';

const URL_PRODUCTS = 'https://jsonplaceholder.typicode.com/photos?id=';

export default function getProductById(props) {
    const { productId } = props;
    return axios.get(URL_PRODUCTS + productId);
}