import * as React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { UserTemplate } from 'templates';
import { Card } from 'organisms';
import { Header } from 'molecules';
import { Paragraph, Input, Section } from 'atoms';
import { GridWrapper } from './Pantry.styles';

// this will be  move to state
const iconsList = [
  { src: 'assets/icons/fruits.svg', name: 'Fruits & Vegs' },
  { src: 'assets/icons/dairy.svg', name: 'Dairy Foods' },
  { src: 'assets/icons/drinks.svg', name: 'Drinks' },
  { src: 'assets/icons/grains.svg', name: 'Grains & Nuts' },
  { src: 'assets/icons/meats.svg', name: 'Meats & Fishes' },
  { src: 'assets/icons/chemicals.svg', name: 'Chemicals' },
];

// combine state and icons
const showPantry = (array, icons, filter) => {
  const filteredArray = array.filter((item) => item.name.toLowerCase().includes(filter));

  const categories = [...new Set(filteredArray.map((item) => item.category))];

  const cardItems = categories.map((category) => {
    const itemsByCategory = filteredArray.filter((item) => item.category === category);
    const categoryIcon = icons.filter((icon) => icon.name === category);
    return <Card key={category} icon={categoryIcon[0].src} content={itemsByCategory} category={category} />;
  });
  return cardItems;
};

const Pantry = () => {
  // sync pantry
  useFirestoreConnect([{ collection: 'pantry' }]);
  const pantry = useSelector((state) => state.firestore.ordered.pantry);

  const [searchState, setSearchState] = React.useState('');
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

export default Pantry;
