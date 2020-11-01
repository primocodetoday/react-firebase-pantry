import React from 'react';
import { render } from '@testing-library/react';
import { Section } from 'components/atoms';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';

describe('<Section/> render properly', () => {
  it('with default props, without theme provider', () => {
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

  it('with passed props, and theme provider', () => {
    const { getByText, container } = render(
      <TestThemeProvider>
        <Section column wrap>
          <div>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </Section>
      </TestThemeProvider>,
    );

    expect(getByText('Lorem ipsum dolor sit')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
