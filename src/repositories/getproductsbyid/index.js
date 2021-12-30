import axios from 'axios';

const URL_PRODUCTS = 'https://jsonplaceholder.typicode.com/photos?id=';

export default async function getProductById(props) {
    const { productId } = props;
    const request = await axios.get(URL_PRODUCTS + productId);

    return request;
}