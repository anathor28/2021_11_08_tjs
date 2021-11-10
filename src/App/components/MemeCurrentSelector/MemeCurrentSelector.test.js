import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeCurrentSelector from './MemeCurrentSelector';

describe('<MemeCurrentSelector />', () => {
  test('it should mount', () => {
    render(<MemeCurrentSelector />);
    
    const memeCurrentSelector = screen.getByTestId('MemeCurrentSelector');

    expect(memeCurrentSelector).toBeInTheDocument();
  });
});