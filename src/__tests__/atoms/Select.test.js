import * as React from 'react';
import { render } from '@testing-library/react';
import { Select } from 'atoms';

describe('<Select/> renders properly', () => {
  it('with default props', () => {
    const { getByTestId, container } = render(<Select />);

    expect(getByTestId('select')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props', () => {
    const testProps = ['Lorem', 'ipsum', 'dolor', 'amet'];

    const { getByDisplayValue, container } = render(<Select options={testProps} />);

    expect(getByDisplayValue('Lorem')).toBeTruthy();
    // TODO This works enough by think about complex test that match whole array

    expect(container.firstChild).toMatchSnapshot();
  });
});
