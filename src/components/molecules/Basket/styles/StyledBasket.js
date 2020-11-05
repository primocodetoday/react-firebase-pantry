import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  padding: 30px;
  margin: 15px 0px 15px 0;
  flex-grow: 1;
  color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  flex-basis: 370px;
`;

export const Line = styled.div`
  margin-top: 15px;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 1px;
`;

Wrapper.defaultProps = defaultThemeProps;
Line.defaultProps = defaultThemeProps;
