import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 25px 25px 0;
  flex-basis: 400px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    padding: 10px 10px 0;
    width: 100%;
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: auto;
  max-width: 50%;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    margin: 0 auto 20px;
    max-width: 80%;
  }
`;
