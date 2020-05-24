import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Card from '../components/organisms/Card';
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
import { Paragraph, Input } from '../components/atoms';

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
// this will be  move to state
const iconsList = [
  { file: fruits, name: 'Fruits & Vegs' },
  { file: dairy, name: 'Dairy Foods' },
  { file: drinks, name: 'Drinks' },
  { file: grains, name: 'Grains & Nuts' },
  { file: meats, name: 'Meats & Fishes' },
  { file: chemicals, name: 'Chemicals' },
];

// combine state and icons
const showPantry = (array, icons) => {
  const categories = [...new Set(array.map((item) => item.category))];
  const cardItems = categories.map((category) => {
    const filteredArray = array.filter((item) => item.category === category);
    const filteredIcon = icons.filter((icon) => icon.name === category);
    return (
      <Card
        key={category}
        icon={filteredIcon[0].file}
        content={filteredArray}
        category={category}
      />
    );
  });
  return cardItems;
};

const PantryPage = ({ pantry }) => {
  return (
    <UserTemplate>
      <SectionWrapper column>
        <Input search placeholder="search" />
        <Header
          titleText="Pantry"
          subTitleText="Click product for change or info"
        />
        <StyledGridWrapper>
          {pantry ? (
            showPantry(pantry, iconsList)
          ) : (
            <Paragraph>Fetching data...</Paragraph>
          )}
        </StyledGridWrapper>
      </SectionWrapper>
    </UserTemplate>
  );
};

const mapStateToProps = (state) => {
  return { pantry: state.firestore.ordered.pantry };
};

PantryPage.defaultProps = {
  pantry: [],
};

PantryPage.propTypes = {
  pantry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      maxStock: PropTypes.number.isRequired,
      minStock: PropTypes.number.isRequired,
    }),
  ),
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'pantry',
    },
  ]),
)(PantryPage);
