import { EmotionComponentProps } from '../types/EmotionComponentProps';

const SectionHeader: React.FC<EmotionComponentProps> = ({
  children,
  className,
}) => (
  <h2 css={{ marginTop: '32px', marginBottom: '4px' }} className={className}>
    {children}
  </h2>
);

export default SectionHeader;
