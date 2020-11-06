import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
`;

Wrapper.defaultProps = defaultThemeProps;
