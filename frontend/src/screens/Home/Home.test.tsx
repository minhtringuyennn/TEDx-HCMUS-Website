import { describe, expect, it } from 'vitest';
import { render, screen, userEvent, waitFor } from 'utils/test-utils';
import Home from 'screens/Home';
import 'i18n';
import Providers from 'app/Providers';

describe('Home tests', () => {
  it('should increment count on click', async () => {
    render(<Home />, { wrapper: Providers });
    userEvent.click(screen.getByTestId('increment-button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });

  it('should decrement count on click', async () => {
    render(<Home />, { wrapper: Providers });
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(await screen.findByText(/count is: 0/i)).toBeInTheDocument();
  });

  it('should display Top 3 posts title', async () => {
    render(<Home />, { wrapper: Providers });
    waitFor(
      async () => {
        expect(await screen.findByText(/Top 3 Posts/i)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
