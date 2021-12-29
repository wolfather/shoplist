export default function insertPrice(props) {
    const value = Math.round(Math.random() * 9999).toFixed(2);
    const price = formatPrice(value * props.qtdy || 1);

    return {...props, price};
}

function formatPrice(value = 0) {
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
    }).format(value);
}
