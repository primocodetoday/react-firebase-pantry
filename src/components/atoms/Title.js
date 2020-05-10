import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 18px;
  margin-right: 10px;
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
