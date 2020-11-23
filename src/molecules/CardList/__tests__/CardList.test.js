import React from 'react';
import { render } from '@testing-library/react';
import { CardList } from 'molecules';

describe('<CardList/> renders properly>', () => {
  const content = [{ id: '1', name: 'Bread', stock: 15, unit: 'kg' }];

  it('with  passed props', () => {
    const { getByText, container } = render(<CardList content={content} />);

    expect(getByText('Bread')).toBeTruthy();
    expect(getByText('15')).toBeTruthy();
    expect(getByText('kg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
