import { setupServer } from 'msw/node';
import mockRouter from 'next-router-mock';
import singletonRouter from 'next/router';

import { mockFishList } from '../../mocks/fish';
import ItemPage from '../../pages/[group]/[item]';
import Group from '../../types/Group';
import { render, waitFor } from '../../utils/tests';
import { handlers } from '../../utils/tests';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('../../modules/actions.ts', () => ({
  getItem: jest.fn(() => mockFishList[0]),
}));

export const server = setupServer(...handlers);

describe('Item Page', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    mockRouter.setCurrentUrl(`/${Group.fish}`);

    singletonRouter.push({
      pathname: '/[group]',
      query: { group: Group.fish },
    });
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('initially shows the loading screen', () => {
    const screen = render(<ItemPage />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('renders the correct heading', async () => {
    const screen = render(<ItemPage />);

    await waitFor(() =>
      expect(
        screen.getByText(mockFishList[0].name.nameUSen)
      ).toBeInTheDocument()
    );
  });

  // TODO: Add tests to check if group-specific data (e.g, availability, prices) appears correctly.
});
