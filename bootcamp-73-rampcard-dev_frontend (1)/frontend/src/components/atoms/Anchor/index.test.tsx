import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AnchorComponent from './index';

describe('AnchorComponent', () => {
  test('renders anchor with provided text', () => {
    const text = 'Click me!';
    render(<AnchorComponent text={text} />);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
  });

  test('prevents default when clicked', () => {
    const text = 'Click me!';
    render(<AnchorComponent text={text} />);
    const linkElement = screen.getByText(text);
    userEvent.click(linkElement);
    expect(linkElement).toHaveAttribute('href', '#');
  });
});
