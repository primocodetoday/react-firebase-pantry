import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;
  margin: 0;
  padding: 0;

  ${({ card }) =>
    card &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
