import React from 'react';
import { render } from '@testing-library/react';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';
import { Logo } from 'components/atoms';
import { MemoryRouter } from 'react-router-dom';

// TODO add routing testing

describe('Render <Logo/> properly', () => {
  it('with default props without provider', () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    expect(getByText('antry')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with default props with theme', () => {
    const { getByText, container } = render(
      <TestThemeProvider>
        <MemoryRouter>
          <Logo />
        </MemoryRouter>
      </TestThemeProvider>,
    );

    expect(getByText('antry')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with "big" props passed', () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <Logo big />
      </MemoryRouter>,
    );

    expect(getByText('antry')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
