import axios from 'axios';

const URL_PRODUCTS = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export default async function getProductsAlbumById(props) {
    const { albumId } = props;

    const request = await axios.get(URL_PRODUCTS + albumId);

    return  request;
}