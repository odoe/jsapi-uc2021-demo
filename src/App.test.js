import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map', () => {
  render(<App />);
  const element = screen.getByTestId('map');
  expect(element).toBeInTheDocument();
});
