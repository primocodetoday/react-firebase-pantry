import styled from 'styled-components/macro';

const Paragraph = styled.p`
  display: inline;
  padding: 0;
  margin: 0;
  font-size: ${({ size }) => size};
`;

export default Paragraph;
