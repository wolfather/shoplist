import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const ButtonMinus = styled.button`
    background: #ccc;
    color: #000;
    text-align: center;
`;

export const Button = styled.button`
    position: relative;
    height: 20px;
    width: 20px;
    background: #ccc;
    color: #000;
    text-align: center;
    font-size: 1em;

    &:after {
        content: ${props => props.simbol};
        position: absolute;
        height: 20px;
        width: 20px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        color: #000;
        text-align: center;
        font-size: 1em;
        line-height: 20px;
    }
`;
Button.defaultProps = {
    simbol: "Mais"
};


//.attrs({type: 'number'})
export const InputQtdyProduct = styled.input`
    text-align: center;
    background: #fff;
`;
