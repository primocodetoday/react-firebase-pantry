import * as React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from 'atoms';

describe('Renders <Fieldset> properly', () => {
  it('with defaultProps', () => {
    const { container, getByText } = render(<Fieldset>Lorem ipsum dolor sit amet</Fieldset>);

    expect(getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with provided legend props', () => {
    const { container, getByText } = render(<Fieldset legend="Test frame">Lorem ipsum dolor sit amet</Fieldset>);

    expect(getByText('Test frame')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
