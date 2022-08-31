import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo.jsx';

describe('Logo', () => {
  test('renders', () => {
    render(<Logo />);

    expect(screen.getByText('lelelime')).toBeInTheDocument();
  });

});






