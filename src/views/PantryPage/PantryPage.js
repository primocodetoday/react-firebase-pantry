import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { UserTemplate } from 'templates';
import { Card } from 'organisms';
import { Header } from 'molecules';
import { Paragraph, Input, Section } from 'atoms';
import { fruits, dairy, drinks, grains, meats, chemicals } from 'assets/icons';
import { GridWrapper } from './PantryPage.styles';

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
const showPantry = (array, icons, filter) => {
  const filteredArray = array.filter((item) => item.name.toLowerCase().includes(filter));

  const categories = [...new Set(filteredArray.map((item) => item.category))];

  const cardItems = categories.map((category) => {
    const itemsByCategory = filteredArray.filter((item) => item.category === category);
    const categoryIcon = icons.filter((icon) => icon.name === category);
    return <Card key={category} icon={categoryIcon[0].file} content={itemsByCategory} category={category} />;
  });
  return cardItems;
};

const PantryPage = () => {
  // sync pantry
  useFirestoreConnect([{ collection: 'pantry' }]);
  const pantry = useSelector((state) => state.firestore.ordered.pantry);

  const [searchState, setSearchState] = useState('');
  const handleSearch = (e) => {
    setSearchState(e.target.value.toLowerCase());
  };

  return (
    <UserTemplate>
      <Section column>
        <Input type="text" search placeholder="SEARCH" name="search" value={searchState} onChange={handleSearch} />
        <Header titleText="Pantry" subTitleText="Click product for change or info" />
        <GridWrapper>
          {pantry ? showPantry(pantry, iconsList, searchState) : <Paragraph>Fetching data...</Paragraph>}
        </GridWrapper>
      </Section>
    </UserTemplate>
  );
};

// const mapStateToProps = (state) => {
//   return { pantry: state.firestore.ordered.pantry };
// };

// PantryPage.defaultProps = {
//   pantry: [],
// };

// PantryPage.propTypes = {
//   pantry: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       stock: PropTypes.number.isRequired,
//       unit: PropTypes.string.isRequired,
//       maxStock: PropTypes.number.isRequired,
//       minStock: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default PantryPage;
