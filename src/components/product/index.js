import React from 'react';
import { Container, ContainerLink, ContainerImage, ContainerInfo, ContainerInfoTitle, ContainerInfoPrice } from './style';

export default function Product(props) {
    const {product: {id, title, thumbnailUrl, price}} = props;
    const linkBuilded = `/detail/${id}`;

    return(<Container id={id}>
        <ContainerLink to={linkBuilded}>
            <ContainerImage
                src={thumbnailUrl} 
                aria-hidden='true'
                alt={title} />
    
            <ContainerInfo>
                <ContainerInfoTitle>{title}</ContainerInfoTitle>
                <ContainerInfoPrice>{price}</ContainerInfoPrice>
            </ContainerInfo>
        </ContainerLink>
    </Container>);
}
