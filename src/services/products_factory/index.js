export default function productFactory(props) {
    const { qtdy } = props;
    const albumProducts = [];
    for(let i=0; i < qtdy; i++) {
        const name = `products ${i}`;
        albumProducts.push({link: `/products/${i}`, name});
    }

    return albumProducts;
}