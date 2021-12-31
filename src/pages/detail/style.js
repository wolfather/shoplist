import styled from 'styled-components';


export const Container = styled.div`
    list-style-type: none;
    display: inline-grid;
    grid-gap: 10px 10px;
    grid-template-columns: repeat(2, 45% [col-start]);
`;