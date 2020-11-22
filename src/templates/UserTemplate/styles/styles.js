import SC from 'styled-components/macro';

export const UserWrapper = SC.div`
  display: flex;
  min-height: 100vh;
  padding: 10px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.primary};
  color: white;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    flex-direction: column;
  }
`;
