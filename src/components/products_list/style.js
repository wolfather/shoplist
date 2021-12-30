import styled from 'styled-components';


export const List = styled.ul`
    list-style-type: none;
    display: inline-grid;
    grid-gap: 10px 10px;
    grid-template-columns: repeat(4, 220px [col-start]);
`;

export const ListItem = styled.li`
    padding: 5px;
`;
