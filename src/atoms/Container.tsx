import useCustomTheme from '../hooks/useCustomTheme';

const Container: React.FC = ({ children }) => {
  const { mq } = useCustomTheme();
  return (
    <div
      css={mq({
        width: '100%',
        maxWidth: ['768px', '1024px'],
        margin: 'auto',
      })}
    >
      {children}
    </div>
  );
};

export default Container;
