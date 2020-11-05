import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'components/atoms';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container, getByText } = render(<Button>Test</Button>);

    expect(getByText('Test')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with secondary props', () => {
    const { container, getByText } = render(<Button secondary>Test</Button>);

    expect(getByText('Test')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
