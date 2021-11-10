import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalWithStore from './ModalWithStore';

describe('<ModalWithStore />', () => {
  test('it should mount', () => {
    render(<ModalWithStore />);
    
    const modalWithStore = screen.getByTestId('ModalWithStore');

    expect(modalWithStore).toBeInTheDocument();
  });
});