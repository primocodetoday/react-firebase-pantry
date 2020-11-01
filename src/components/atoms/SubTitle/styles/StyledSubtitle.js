import styled from 'styled-components/macro';

export const Wrapper = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
`;

Wrapper.defaultProps = {
  theme: {
    fontSize: {
      normal: '1.6rem',
    },
  },
};
