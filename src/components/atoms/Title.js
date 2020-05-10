import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 18px;
  margin-right: 10px;
  text-align: right;

  ${({ card }) =>
    card &&
    css`
      font-size: ${({ theme }) => theme.fontSize.big};
    `}
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
