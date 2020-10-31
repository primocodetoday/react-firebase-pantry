import React from 'react';
import { render } from '@testing-library/react';
import { ButtonIcon } from 'components/atoms';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container } = render(
      <TestThemeProvider>
        <ButtonIcon icon="assets/icon/testIcon.svg" />
      </TestThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
