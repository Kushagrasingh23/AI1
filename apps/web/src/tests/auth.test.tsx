import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '@/pages/index';

describe('Auth flow UI', () => {
  it('shows Get Started button and opens modal', () => {
    render(<HomePage />);
    const btn = screen.getAllByText(/get started/i)[0];
    fireEvent.click(btn);
    const matches = screen.getAllByText(/sign in/i);
    expect(matches.length).toBeGreaterThan(0);
  });
});