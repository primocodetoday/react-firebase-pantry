import styled from 'styled-components';
import { Paragraph } from 'components/atoms';

export const Wrapper = styled.li`
  width: 100%;
  display: grid;
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
