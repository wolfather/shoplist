import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 5px;
    grid-column: 1;
    grid-row: 1;
    background: #eee;
`;

export const ContainerLink = styled(Link)`
    padding: 5px;
    text-decoration: none;
    
    &:hover {
        padding: 4px
        border: 1px solid #999;
    }
`;

export const ContainerImage = styled.img`
    display: block;
    margin: 0 auto 10px;
    width: 100px;
    height: 100px;
    clear: both;
`;

export const ContainerInfo = styled.div`
    margin: 10px 0 0;
    color: #333;
`;

export const ContainerInfoTitle = styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 1em;
    line-height: 1;
    text-overflow: ellipsis;
    white-space: nowrap; 
    word-wrap: break-word;
    overflow: hidden;
    line-clamp: 2; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`;
    
export const ContainerInfoPrice = styled.span`
    display: block;
    text-align: center;
    font-size: 1.4em;
    line-height: 1;
`;
