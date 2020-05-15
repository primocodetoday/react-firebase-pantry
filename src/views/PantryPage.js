import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../components/organisms/Card';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import UserTemplate from '../templates/UserTemplate';
import {
  fruits,
  dairy,
  drinks,
  grains,
  meats,
  chemicals,
} from '../assets/icons';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  padding-left: 70px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 70px;

  @media (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 30px;
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;
  color: white;
  margin-top: 17px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
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
      <StyledWrapper>
        <StyledHeader>
          <Input search placeholder="search" />
          <section>
            <StyledTitle>Pantry</StyledTitle>
            <p>Products</p>
          </section>
        </StyledHeader>
        <StyledGridWrapper>
          {showItems(items, 'Fruits & Vegs', fruits)}
          {showItems(items, 'Chemicals', chemicals)}
          {showItems(items, 'Meats & Fishes', meats)}
          {showItems(items, 'Grains & Nuts', grains)}
          {showItems(items, 'Dairy Foods', dairy)}
          {showItems(items, 'Drinks', drinks)}
        </StyledGridWrapper>
      </StyledWrapper>
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
      stock: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      maxStock: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(PantryPage);
