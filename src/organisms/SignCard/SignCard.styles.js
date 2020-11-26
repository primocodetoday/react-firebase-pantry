import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: 30px 20px;
  color: ${({ theme }) => theme.primary};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-items: center;
  row-gap: 10px;

  p:first-child {
    margin-bottom: 10px;
  }
  p:nth-child(2) {
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    width: 90vw;
  }
`;
