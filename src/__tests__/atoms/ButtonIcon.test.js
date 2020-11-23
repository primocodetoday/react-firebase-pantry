import * as React from 'react';
import { render } from '@testing-library/react';
import { ButtonIcon } from 'atoms';

describe('Renders <Button/> properly', () => {
  it('with defaultProps', () => {
    const { container } = render(<ButtonIcon icon="assets/icon/testIcon.svg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
