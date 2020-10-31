import React from 'react';
import { render } from '@testing-library/react';
import { TestThemeProvider } from '__tests__/helpers/TestThemeProvider';
import { Input } from 'components/atoms';

describe('Component <Input/> render properly', () => {
  it('with default props', () => {
    const { getByTestId, container } = render(
      <TestThemeProvider>
        <Input />
      </TestThemeProvider>,
    );

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with "search" props', () => {
    const { getByTestId, container } = render(
      <TestThemeProvider>
        <Input search />
      </TestThemeProvider>,
    );

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with "settings" props', () => {
    const { getByTestId, container } = render(
      <TestThemeProvider>
        <Input settings />
      </TestThemeProvider>,
    );

    expect(getByTestId('input')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with passed props', () => {
    const { container, getByPlaceholderText } = render(
      <TestThemeProvider>
        <Input placeholder="Email address" />
      </TestThemeProvider>,
    );

    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
