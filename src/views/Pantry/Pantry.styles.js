import styled, { css } from 'styled-components/macro';

function delayAppear() {
  let styles = '';
  for (let i = 1; i < 7; i += 1) {
    styles += `
      & > div:nth-child(${i}) {
         animation-delay: ${i * 0.2}s;
       }
     `;
  }
  return css`
    ${styles}
  `;
}

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  & > div {
    animation: appear 0.2s;
    animation-fill-mode: both;
  }

  ${delayAppear()}

  @keyframes appear {
    0% {
      opacity: 0;
      top: 50px;
    }
    100% {
      opacity: 1;
      top: 0px;
    }
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    width: 100%;
    padding: 0;
  }
`;
