import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'components/atoms';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container, getByText } = render(
      <TestThemeProvider>
        <Button>Test</Button>
      </TestThemeProvider>,
    );

    expect(getByText('Test')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with secondary props', () => {
    const { container, getByText } = render(
      <TestThemeProvider>
        <Button secondary>Test</Button>
      </TestThemeProvider>,
    );

    expect(getByText('Test')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
