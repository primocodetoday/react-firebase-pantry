import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-basis: 400px;
  min-height: 250px;
  padding: 37px 30px;
  margin-bottom: 25px;
  margin-right: 52px;
  flex-grow: 1;
`;

const TitleCard = styled(Title)`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 25px;
`;

const Line = styled.div`
  background-color: #123c69;
  height: 1px;
  width: 100%;
`;

const CardIcon = styled.div`
  position: absolute;
  top: 22px;
  left: 32px;
  width: 55px;
  height: 70px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

const PantryCard = ({ category, icon }) => {
  return (
    <Wrapper>
      <CardIcon icon={icon} />
      <TitleCard>{category}</TitleCard>
      <Line />
      <p>List</p>
    </Wrapper>
  );
};

PantryCard.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PantryCard;
