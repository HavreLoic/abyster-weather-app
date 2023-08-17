import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// describe('App', () => {
//     test('should call on search change', () => { 
//         const onSearchChange = jest.fn();
//         const {  } = render(<App onSearchChange={onSearchChange} />)
//      })
// })

test('App render correctly', () => {
    render(<App />);
    expect(screen.getByText('Rechercher la ville')).toBeInTheDocument();
})
