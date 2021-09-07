import { render, screen } from '@testing-library/react';
import List from './List';

const items = ['html', 'css', 'js'];

describe('List component', () => {
  it('List renders', () => {
    render(
      <List items={items} renderItem={item => <li key={item}>{item}</li>} />
    );

    expect(screen.getByText('html')).toBeInTheDocument();
  });

  it('List renders without data', () => {
    render(<List />);
    expect(screen.queryByRole('list')).toBeNull();
  });
});
