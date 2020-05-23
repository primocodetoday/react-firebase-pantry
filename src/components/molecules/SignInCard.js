import styled from 'styled-components';

const SignInCard = styled.div`
  padding: 20px;
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
  grid-template-rows: 100px 40px 1fr 5px 1fr 5px 80px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    width: 90vw;
  }
`;

export default SignInCard;
