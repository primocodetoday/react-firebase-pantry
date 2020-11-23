import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from 'atoms';

describe('<Paragraph/> components renders properly', () => {
  it('with passed children', () => {
    const { getByText, container } = render(<Paragraph>Lorem ipsum dolor sit amet</Paragraph>);

    expect(getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with size prop', () => {
    const { getByText, container } = render(<Paragraph size="20px">Lorem ipsum dolor sit amet</Paragraph>);

    expect(getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
