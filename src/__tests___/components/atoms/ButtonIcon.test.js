import React from 'react';
import { render } from '@testing-library/react';
import { ButtonIcon } from 'components/atoms';
import { GlobalStyles } from 'theme/GlobalStyles';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container } = render(
      <>
        <GlobalStyles />
        <ButtonIcon icon="assets/icon/testIcon.svg" />
      </>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
