import styled from 'styled-components/macro';
import { Paragraph } from 'components/atoms';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 50px 35px;
  margin: 5px 0;
  cursor: pointer;
  color: ${(theme) => theme.primary};

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    font-size: 2.3rem;
  }
`;

export const Stock = styled(Paragraph)`
  text-align: right;
  margin-right: 3px;
`;

Wrapper.defaultProps = defaultThemeProps;
