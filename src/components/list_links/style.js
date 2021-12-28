import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const ListItem = styled.li`
    padding: 5px;
`;

export const ListLinkItems = styled(Link)`
    padding: 5px;
    height: 30px;
    line-height: 1;
    text-decoration: none;
    color: #fff;
    background-color: #3f3;
`;