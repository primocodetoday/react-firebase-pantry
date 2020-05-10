import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 80px;
  height: 80px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  color: white;
  background-position: 50% 50%;
  border: none;
  background-color: white;
  background-size: 80%;
`;

export default ButtonIcon;
