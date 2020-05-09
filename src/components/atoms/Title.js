import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: 25px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 18px;
  margin-right: 10px;
  text-align: right;
`;

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
