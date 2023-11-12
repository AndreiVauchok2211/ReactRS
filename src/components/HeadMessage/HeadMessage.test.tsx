import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeadMessage } from './HeadMessage';

test('render texst', () => {
  render(<HeadMessage />);
  expect(screen.getByText('No routing')).toBeInTheDocument();
});
