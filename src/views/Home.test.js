import { render, screen } from '@testing-library/react';
import HomeView from './HomeView';
import userEvent from '@testing-library/user-event';

describe('Home page component', () => {
  it('Home page renders', () => {
    render(<HomeView />);

    expect(
      screen.getByText((content, element) => content.startsWith('Welcome'))
    ).toBeInTheDocument();
  });

  it('renders button if not clicked', () => {
    render(<HomeView />);

    const buttonElement = screen.getByText((content, element) =>
      content.startsWith('Say Hi')
    );
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders Hey there if clicked', () => {
    render(<HomeView />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.getByText((content, element) =>
      content.startsWith('Hey there!')
    );
    expect(textElement).toBeInTheDocument();
  });

  it('does not renders Hey there if not clicked', () => {
    render(<HomeView />);

    const textElement = screen.queryByText((content, element) =>
      content.startsWith('Hey there!')
    );
    expect(textElement).toBeNull();
  });
});
