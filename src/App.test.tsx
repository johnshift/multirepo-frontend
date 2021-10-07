import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
