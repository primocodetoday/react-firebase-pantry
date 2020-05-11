import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';
import CardList from './CardList';

const StyledWrapper = styled.div`
  position: relative;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-basis: 350px;
  min-height: 250px;
  padding: 37px 30px;
  flex-grow: 1;
`;

const StyledTitle = styled(Title)`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 25px;
`;

const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 1px;
  width: 100%;
`;

const CardIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 32px;
  width: 55px;
  height: 70px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

const PantryCard = ({ category, icon, content }) => {
  return (
    <StyledWrapper>
      <CardIcon icon={icon} />
      <StyledTitle>{category}</StyledTitle>
      <StyledLine />
      <CardList content={content} />
    </StyledWrapper>
  );
};

PantryCard.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PantryCard;
