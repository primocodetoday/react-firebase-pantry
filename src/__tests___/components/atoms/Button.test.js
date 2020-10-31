import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'components/atoms';
import { GlobalStyles } from 'theme/GlobalStyles';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container, getByText } = render(
      <>
        <GlobalStyles />
        <Button>Test</Button>
      </>,
    );

    expect(getByText('Test')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
