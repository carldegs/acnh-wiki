import GroupPage from '../pages/[group]';
import ItemPage from '../pages/[group]/[item]';
import Home from '../pages/index';
import { render } from '../utils/tests';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});

it('renders group page unchanged', () => {
  const { container } = render(<GroupPage />);

  expect(container).toMatchSnapshot();
});

it('renders items page unchanged', () => {
  const { container } = render(<ItemPage />);

  expect(container).toMatchSnapshot();
});
