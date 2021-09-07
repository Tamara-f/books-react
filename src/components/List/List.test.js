import { render, screen } from '@testing-library/react';
import List from './List';

const items = ['html', 'css', 'js'];

describe('List component', () => {
  test('List renders', () => {
    render(
      <List items={items} renderItem={item => <li key={item}>{item}</li>} />
    );
    expect(screen.getByText('html')).toBeInTheDocument();
  });
});
