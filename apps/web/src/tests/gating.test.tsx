import { render, screen } from '@testing-library/react';
import FeedPage from '@/pages/feed';

describe('Subscription gating UI', () => {
  it('renders some posts with Unlock button', () => {
    render(<FeedPage />);
    expect(screen.getAllByText(/unlock/i).length).toBeGreaterThan(0);
  });
});