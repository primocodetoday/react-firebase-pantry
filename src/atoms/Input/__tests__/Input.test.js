import React from 'react';
import { render } from '@testing-library/react';
import { Input } from 'atoms';

describe('Component <Input/> render properly', () => {
  it('with default props', () => {
    const { getByTestId, container } = render(<Input />);

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with "search" props', () => {
    const { getByTestId, container } = render(<Input search />);

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with "settings" props', () => {
    const { getByTestId, container } = render(<Input settings />);

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props', () => {
    const { container, getByPlaceholderText } = render(<Input placeholder="Email address" />);

    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
