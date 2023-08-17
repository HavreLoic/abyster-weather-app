import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('App render correctly', () => {
    render(<App />);
    expect(screen.getByText('Rechercher la ville')).toBeInTheDocument();
})
