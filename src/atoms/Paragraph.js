import SC from 'styled-components/macro';
import PropTypes from 'prop-types';

export const Paragraph = SC.p`
  display: inline;
  padding: 0;
  margin: 0;
  font-size: ${({ size }) => size};
`;

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};
