import IconButton from '../../atoms/IconButton';
import { render, fireEvent } from '../../utils/tests';

describe('IconButton', () => {
  it('renders items page unchanged', () => {
    const { container } = render(<IconButton icon={<div>+</div>} />);

    expect(container).toMatchSnapshot();
  });

  it('shows the icon', () => {
    const screen = render(<IconButton icon={<div>+</div>} />);

    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('triggers onClick function', () => {
    const func = jest.fn();
    const screen = render(<IconButton icon={<div>+</div>} onClick={func} />);

    fireEvent.click(screen.getByText('+'));

    expect(func).toHaveBeenCalled();
  });
});
