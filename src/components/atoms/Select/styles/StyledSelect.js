import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.select`
  text-align: center;
  text-align-last: center;
  padding: 10px 10px;
  border: none;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  option {
    text-align: left;
  }
`;

Wrapper.defaultProps = defaultThemeProps;
