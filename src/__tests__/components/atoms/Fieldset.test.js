import React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from 'components/atoms';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';

describe('Renders <Fieldset> properly', () => {
  it('with defaultProps', () => {
    const { container, getByText } = render(
      <TestThemeProvider>
        <Fieldset>Lorem ipsum dolor sit amet</Fieldset>
      </TestThemeProvider>,
    );

    expect(getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with provided legend props', () => {
    const { container, getByText } = render(
      <TestThemeProvider>
        <Fieldset legend="Test frame">Lorem ipsum dolor sit amet</Fieldset>
      </TestThemeProvider>,
    );

    expect(getByText('Test frame')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
