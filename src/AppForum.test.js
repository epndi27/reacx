import { render, screen } from '@testing-library/react';
import AppForum from './AppForum';

test('renders learn react link', () => {
  render(<AppForum />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
