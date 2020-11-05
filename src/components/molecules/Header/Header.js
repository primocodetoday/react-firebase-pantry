import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text, SubText } from './styles/StyledHeader';

export const Header = ({ titleText, subTitleText }) => {
  return (
    <Wrapper>
      <Text>{titleText}</Text>
      <SubText>{subTitleText}</SubText>
    </Wrapper>
  );
};

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string.isRequired,
};
