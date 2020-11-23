import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.fieldset`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 25px;
  color: white;

  legend {
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 0 10px;
    margin-left: 15px;
  }
`;

Wrapper.defaultProps = defaultThemeProps;
