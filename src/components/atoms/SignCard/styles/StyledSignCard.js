import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  width: 450px;
  padding: 30px 20px;
  color: ${({ theme }) => theme.primary};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
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
`;

Wrapper.defaultProps = {
  theme: {
    primary: '#0D2743',
    borderRadius: '15px',
    mediaBreaks: {
      mobile: 600,
    },
  },
};
