export default function insertPrice(props) {
    const qtdyItems = props.qtdy !== undefined ? props.qtdy : 1;

    const value = Math.round(Math.random() * 9999).toFixed(2);
    const price = formatPrice(value * qtdyItems);
    
    return {...props, price};
}

export function formatPrice(value = 0) {
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
    }).format(value);
}

