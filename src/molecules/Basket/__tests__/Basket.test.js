import React from 'react';
import { render } from '@testing-library/react';
import { Basket } from 'molecules';

describe('<Basket/> renders properly>', () => {
  it('without  props', () => {
    const { getByText, container } = render(<Basket />);

    expect(getByText('Shop list')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with  passed props', () => {
    const { getByText, container } = render(
      <Basket>
        <h1>Test string</h1>
      </Basket>,
    );

    expect(getByText('Shop list')).toBeTruthy();
    expect(getByText('Test string')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
