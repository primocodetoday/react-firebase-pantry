import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, SubTitle } from '../atoms';

const StyledWrapper = styled.header`
  width: 100%;
  margin: 25px 0;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    text-align: center;
  }
`;

const StyledTitle = styled(Title)`
  color: white;
`;
const StyledSubTitle = styled(SubTitle)`
  color: white;
  margin-top: 17px;
`;

const Header = ({ titleText, subTitleText }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{titleText}</StyledTitle>
      <StyledSubTitle>{subTitleText}</StyledSubTitle>
    </StyledWrapper>
  );
};

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string.isRequired,
};

export default Header;
