import EmptyProducts from './index';
import jest from 'jest';
import { render, screen } from '@testing-library/react';

describe('EmptyProducts', () => {

    test('Should have a text on a paragraph', () => {
        const textExpected = 'Sem produtos no momento';
        render(<EmptyProducts />);

        const el = screen.getBytText('0');
        expect(el.innerText).toBe(textExpected);
    });


});