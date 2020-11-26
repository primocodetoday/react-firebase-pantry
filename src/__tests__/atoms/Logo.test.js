import * as React from 'react';
import { render } from '@testing-library/react';
import { Logo } from 'atoms';
import { MemoryRouter } from 'react-router-dom';

// TODO TEST - add routing testing

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
