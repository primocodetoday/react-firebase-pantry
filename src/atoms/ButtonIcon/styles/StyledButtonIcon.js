import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.button`
  width: 42px;
  height: 37px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

Wrapper.defaultProps = defaultThemeProps;
