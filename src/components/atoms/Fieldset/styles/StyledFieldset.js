import styled from 'styled-components/macro';

export const Wrapper = styled.fieldset`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 25px;
  color: white;

  legend {
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 0 10px;
    margin-left: 15px;
  }
`;

Wrapper.defaultProps = {
  theme: {
    fontSize: {
      normal: '1.6rem',
    },
    borderRadius: '15px',
  },
};
