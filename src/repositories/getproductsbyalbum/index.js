import axios from 'axios';
import data from '../../mocks/products.mock.json';

const URL_PRODUCTS = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export default function getProductsAlbumById(props) {
    const { albumId } = props;
    console.log(data);
    return axios.get(URL_PRODUCTS + albumId);
}