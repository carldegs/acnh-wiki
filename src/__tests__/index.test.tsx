import singletonRouter from 'next/router';

import GROUP_DATA from '../constants/groupData';
import Home from '../pages/index';
import Group from '../types/Group';
import { render, fireEvent } from '../utils/tests';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Home', () => {
  it('renders a heading', () => {
    const screen = render(<Home />);

    const heading = screen.getByText('ACNH Wiki');

    expect(heading).toBeInTheDocument();
  });

  it('renders group buttons', () => {
    const screen = render(<Home />);

    GROUP_DATA.forEach(({ id }) => {
      const button = screen.getByTestId(`button-${id}`);

      expect(button).toBeInTheDocument();
    });
  });

  it('should redirect to group page when button is clicked', () => {
    const screen = render(<Home />);

    const button = screen.getByTestId(`button-${Group.fish}`);

    fireEvent.click(button);

    expect(singletonRouter.asPath).toEqual(`/${Group.fish}`);
  });
});
