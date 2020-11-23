import * as React from 'react';
import { render } from '@testing-library/react';
import { Section } from 'atoms';

describe('<Section/> render properly', () => {
  it('with passed nodes', () => {
    const { getByText, container } = render(
      <Section>
        <div>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </Section>,
    );

    expect(getByText('Lorem ipsum dolor sit')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props', () => {
    const { getByText, container } = render(
      <Section column wrap>
        <div>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </Section>,
    );

    expect(getByText('Lorem ipsum dolor sit')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
