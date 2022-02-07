import { setupServer } from 'msw/node';
import mockRouter from 'next-router-mock';
import singletonRouter from 'next/router';

import GROUP_DATA from '../../constants/groupData';
import { mockFishList } from '../../mocks/fish';
import GroupPage from '../../pages/[group]';
import Group from '../../types/Group';
import { render, waitFor, fireEvent } from '../../utils/tests';
import { handlers } from '../../utils/tests';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('../../modules/actions.ts', () => ({
  getList: jest.fn(() => mockFishList),
}));

const fishData = GROUP_DATA.find(({ id }) => id === Group.fish);

export const server = setupServer(...handlers);

describe('Group Page', () => {
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
    const screen = render(<GroupPage />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('renders the correct heading', async () => {
    const screen = render(<GroupPage />);

    await waitFor(() =>
      expect(
        screen.getByText((fishData as { name: string })?.name)
      ).toBeInTheDocument()
    );
  });

  it('should redirect to the item page when item is selected', async () => {
    const screen = render(<GroupPage />);
    const button = await screen.findByTestId(
      `button-${mockFishList[0].name['nameUSen']}`
    );

    fireEvent.click(button);

    expect(singletonRouter.asPath).toEqual(
      `/${fishData?.id}/${mockFishList[0].fileName}`
    );
  });
});
