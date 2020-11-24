import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  padding: 25px 25px 0;
  flex-basis: 400px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    justify-content: center;
    width: 100%;
    padding: 10px 10px 0;
  }
`;

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    max-width: 80%;
    margin: 0 auto 20px;
  }
`;
