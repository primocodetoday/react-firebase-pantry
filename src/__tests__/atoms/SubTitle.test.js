import * as React from 'react';
import { render } from '@testing-library/react';
import { SubTitle } from 'atoms';

describe('<SubTitle/> renders properly', () => {
  it('with passed props', () => {
    const { getByText, container } = render(<SubTitle>Hello World</SubTitle>);

    expect(getByText('Hello World')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
