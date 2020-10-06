import styled from 'styled-components';

export const Wrapper = styled.fieldset`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  padding: 25px;

  legend {
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 0 10px;
    margin-left: 15px;
  }
`;
