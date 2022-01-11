import React from 'react';
import { cleanup, render } from "@testing-library/react";
import { create } from 'react-test-renderer';
import Header from "./index";

afterEach(cleanup)

it('should render a H1 on header', () => {
    const { getByText } = render(<Header />);
    const pageTitle = getByText('Shopping');
    expect(pageTitle).toBe('Shoplist');
});


it('should assert Link to route', () => {
    const tree = create(<Header />);

    expect(tree.toJSON).toMatchSnapshot();
});