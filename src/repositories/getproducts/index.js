import axios from 'axios';
import data from '../../mocks/products.mock.json';

const URL_PRODUCTS = 'https://jsonplaceholder.typicode.com/photos';

export default function () {
    console.log(data);
    return axios.get(URL_PRODUCTS);
}