import React from 'react';
import { render } from '@testing-library/react';
import { SignCard } from 'atoms';

describe('<SignCard/> renders properly', () => {
  it('with passed node', () => {
    const { getByText, container } = render(
      <SignCard>
        <div>
          <p>Hello World</p>
        </div>
      </SignCard>,
    );

    expect(getByText('Hello World')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
