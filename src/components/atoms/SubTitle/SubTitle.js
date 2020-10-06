import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubTitle = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
