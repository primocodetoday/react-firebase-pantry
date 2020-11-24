import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';
import PropTypes from 'prop-types';

const SignCard = styled.div`
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

SignCard.propTypes = {
  children: PropTypes.node.isRequired,
};

SignCard.defaultProps = defaultThemeProps;

export default SignCard;
