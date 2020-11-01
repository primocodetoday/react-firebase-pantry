import styled from 'styled-components/macro';

export const Wrapper = styled.select`
  text-align: center;
  text-align-last: center;
  padding: 10px 10px;
  border: none;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  option {
    text-align: left;
  }
`;

Wrapper.defaultProps = {
  theme: {
    secondary: '#ac3b61',
    borderRadius: '16px',
  },
};
