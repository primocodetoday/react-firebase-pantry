import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  justify-content: flex-start;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  width: 100%;
  min-height: 100vh;
  padding: 25px 35px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    /* align-items: center; */
    padding: 10px 10px 0;
  }
`;

Wrapper.defaultProps = defaultThemeProps;

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
