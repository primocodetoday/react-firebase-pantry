import React from 'react';
import { render } from '@testing-library/react';
import { Select } from 'components/atoms';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';

describe('<Select/> renders properly', () => {
  it('with default props, without ThemeProvider', () => {
    const { getByTestId, container } = render(<Select />);

    expect(getByTestId('select')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props, with ThemeProvider', () => {
    const testProps = ['Lorem', 'ipsum', 'dolor', 'amet'];

    const { getByDisplayValue, container } = render(
      <TestThemeProvider>
        <Select options={testProps} />
      </TestThemeProvider>,
    );

    expect(getByDisplayValue('Lorem')).toBeTruthy();
    // TODO This works enough by think about complex test that match whole array

    expect(container.firstChild).toMatchSnapshot();
  });
});
