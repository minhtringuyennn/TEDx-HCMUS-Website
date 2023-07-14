import { describe, expect, it } from 'vitest';
import { render, screen } from 'utils/test-utils';
import List from 'components/List';
import type { Post } from 'api/clients/ticket/response';
import posts from 'mocks/posts.json';

const list = posts as Post[];

describe('List', () => {
  it('should display Top 3 posts', async () => {
    render(
      <List
        items={list?.slice(0, 3) ?? []}
        emptyStateElement="No posts available"
        renderOption={({ title, id, body }, index) => (
          <li key={id} data-testid={`list-item-${index + 1}`}>
            <h3>
              <u>
                #{id}: {title}
              </u>
            </h3>
            <pre>{body}</pre>
          </li>
        )}
      />,
    );
    expect(await screen.findByTestId('list-item-1')).toBeInTheDocument();
    expect(await screen.findByTestId('list-item-2')).toBeInTheDocument();
    expect(await screen.findByTestId('list-item-3')).toBeInTheDocument();
    expect(screen.queryByTestId('list-item-4')).not.toBeInTheDocument();
  });

  it('should display the empty state element when the list is empty', async () => {
    render(
      <List
        items={[]}
        emptyStateElement="No posts available"
        renderOption={(_, index) => (
          <li key={index} data-testid={`list-item-${index + 1}`}>
            Should not appear
          </li>
        )}
      />,
    );
    expect(await screen.findByText(/No posts available/i)).toBeInTheDocument();
    expect(screen.queryByText(/Should not appear/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('list-item-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('list-item-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('list-item-3')).not.toBeInTheDocument();
    expect(screen.queryByTestId('list-item-4')).not.toBeInTheDocument();
  });
});
