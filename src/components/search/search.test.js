import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './search';

const onSearchChange = jest.fn()

describe('Search', () => {
    test('search component render correctly with handleOnChange function', () => {
        render(<Search onSearchChange={onSearchChange} />)
        const inputElement = screen.getByText(/Rechercher la ville/i)
        expect(inputElement).toBeInTheDocument();
    })
})