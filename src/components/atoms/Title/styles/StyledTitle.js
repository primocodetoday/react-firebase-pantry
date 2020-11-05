import styled, { css } from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.h1`
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;

  ${({ card }) =>
    card &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`;

Wrapper.defaultProps = defaultThemeProps;
