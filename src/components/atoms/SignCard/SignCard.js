import styled, { css } from 'styled-components';

const SignCard = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.primary};
  background-color: white;
  width: 450px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 10px;

  p:first-child {
    margin-bottom: 10px;
  }
  p:nth-child(2) {
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    width: 90vw;
  }

  ${({ signup }) =>
    signup &&
    css`
      background-color: grey;
    `}
`;

export default SignCard;
