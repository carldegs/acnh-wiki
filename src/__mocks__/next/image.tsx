import { ReactElement } from 'react';

const mock = (props: { children: ReactElement }): ReactElement => {
  return <>{props.children}</>;
};

export default mock;
