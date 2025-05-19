import React from 'react';
import { render, screen } from '@testing-library/react';
import HomepageFeatures from '..';

describe('HomepageFeatures', () => {
  it('renders feature headings', () => {
    render(<HomepageFeatures />);
    expect(screen.getByText(/Architecture/i)).toBeInTheDocument();
  });
});