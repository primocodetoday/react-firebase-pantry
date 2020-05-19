import styled, { css } from 'styled-components';

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  padding: 25px 35px;
  justify-content: flex-start;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    padding: 10px 10px 0;
    align-items: center;
  }
`;

export default SectionWrapper;
