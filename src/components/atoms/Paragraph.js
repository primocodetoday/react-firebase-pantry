import styled from 'styled-components';

const Paragraph = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.size};
`;

export default Paragraph;
