import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 42px;
  height: 37px;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: ${({ theme }) => theme.secodary};
  background-size: contain;
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-left: 16px;
  cursor: pointer;
`;

export default ButtonIcon;
