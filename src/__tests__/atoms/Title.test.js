import * as React from 'react';
import { render } from '@testing-library/react';
import { Title } from 'atoms';

describe('<Title/> renders properly', () => {
  it('with default props', () => {
    const { getByText, container } = render(<Title>Hello World</Title>);

    expect(getByText('Hello World')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props', () => {
    const { getByText, container } = render(<Title card>Hello World</Title>);

    expect(getByText('Hello World')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
