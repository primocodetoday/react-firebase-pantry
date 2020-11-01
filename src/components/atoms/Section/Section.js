import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledSection';

export const Section = ({ children, column, wrap, ...restProps }) => {
  return (
    <Wrapper $column={column} $wrap={wrap} {...restProps}>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  column: PropTypes.bool,
  wrap: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  column: false,
  wrap: false,
};
