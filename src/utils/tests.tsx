import { Global, ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';
import { rest } from 'msw';
import { ReactElement } from 'react';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';

import { mockFishList } from '../mocks/fish';
import theme from '../theme';

export const handlers = [
  rest.get('*/fish', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFishList));
  }),
  rest.get('*/fish/bitterling', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFishList[0]));
  }),
];

export const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <QueryWrapper>{children}</QueryWrapper>
    </ThemeWrapper>
  );
};

export const ThemeWrapper: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={theme.global} />
      {children}
    </ThemeProvider>
  );
};

export const QueryWrapper: React.FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={{}}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export const renderClientWithQuery = (ui: React.ReactElement) => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
    { wrapper: ThemeWrapper }
  );

  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ProvidersWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
