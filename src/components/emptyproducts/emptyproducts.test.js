import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import EmptyProducts from './index';


afterEach(cleanup);

test('Should have a snapshot', () => {
    const textExpected = 'Sem produtos no momento';
    const component = renderer.create(<EmptyProducts />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Should have a text on a paragraph', () => {
    const textExpected = 'Sem produtos no momento';
    const { queryAllByText } = render(<EmptyProducts />);
    
    expect(queryAllByText(textExpected)).toBeTruthy();
});
