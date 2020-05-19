import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../components/organisms/Card';
import Input from '../components/atoms/Input';
import Header from '../components/molecules/Header';
import UserTemplate from '../templates/UserTemplate';
import {
  fruits,
  dairy,
  drinks,
  grains,
  meats,
  chemicals,
} from '../assets/icons';
import SectionWrapper from '../templates/SectionWrapper';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    padding: 0;
    width: 100%;
  }
`;

const showItems = (array, category, icon) => {
  const filteredArray = array.filter((item) => item.category === category);
  if (filteredArray.length)
    return (
      <Card
        key={category}
        icon={icon}
        content={filteredArray}
        category={category}
      />
    );
  return null;
};

const PantryPage = ({ items }) => {
  return (
    <UserTemplate>
      <SectionWrapper column>
        <Input search placeholder="search" />
        <Header
          titleText="Pantry"
          subTitleText="Click product for change or info"
        />
        <StyledGridWrapper>
          {showItems(items, 'Fruits & Vegs', fruits)}
          {showItems(items, 'Chemicals', chemicals)}
          {showItems(items, 'Meats & Fishes', meats)}
          {showItems(items, 'Grains & Nuts', grains)}
          {showItems(items, 'Dairy Foods', dairy)}
          {showItems(items, 'Drinks', drinks)}
        </StyledGridWrapper>
      </SectionWrapper>
    </UserTemplate>
  );
};

const mapStateToProps = (state) => {
  return { items: state };
};

PantryPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      maxStock: PropTypes.number.isRequired,
      minStock: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(PantryPage);
