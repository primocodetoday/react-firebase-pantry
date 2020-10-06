import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../atoms/Title/Title';
import CardList from '../molecules/CardList';

const StyledWrapper = styled.div`
  position: relative;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-basis: 350px;
  min-height: 250px;
  padding: 27px 25px;
  max-width: 420px;
  flex-grow: 1;

  @media (max-width: 960px) {
    max-width: 100%;
    min-height: 100px;
  }
`;

const StyledTitle = styled(Title)`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 20px;
`;

const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 1px;
  width: 100%;
`;

const CardIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 27px;
  width: 50px;
  height: 65px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

const Card = ({ category, icon, content }) => {
  return (
    <StyledWrapper>
      <CardIcon icon={icon} />
      <StyledTitle card>{category}</StyledTitle>
      <StyledLine />
      <CardList content={content} />
    </StyledWrapper>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
