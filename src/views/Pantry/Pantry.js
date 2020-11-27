import * as React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { UserTemplate } from 'templates';
import { Card } from 'organisms';
import { Header } from 'molecules';
import { Paragraph, Input, Section } from 'atoms';
import { PANTRY_ICONS } from 'constants/pantryIcons';
import * as pHelp from './pHelpers';
import { GridWrapper } from './Pantry.styles';

const Pantry = () => {
  // sync pantry
  useFirestoreConnect([{ collection: 'pantry' }]);
  const pantry = useSelector((state) => (state.firestore.ordered.pantry ? state.firestore.ordered.pantry : []));

  const [searchState, setSearchState] = React.useState('');
  const handleSearch = (e) => {
    setSearchState(e.target.value.toLowerCase());
  };

  const filteredPantry = React.useMemo(() => pHelp.filterByItemName(pantry, searchState), [pantry, searchState]);
  const categories = React.useMemo(() => pHelp.uniqueCategories(filteredPantry), [filteredPantry]);

  const pantryItems = React.useMemo(
    () =>
      categories.map((category) => {
        const itemsByCategory = pHelp.filterItemsByCategory(filteredPantry, category);
        const [icon] = pHelp.filterIconByCategory(PANTRY_ICONS, category);
        return <Card key={category} icon={icon.src} content={itemsByCategory} category={category} />;
      }),
    [categories, filteredPantry],
  );

  return (
    <UserTemplate>
      <Section column>
        <Input search placeholder="SEARCH" name="search" value={searchState} onChange={handleSearch} />
        <Header titleText="Pantry" subTitleText="Click product for change or info" />
        <GridWrapper>{pantry ? pantryItems : <Paragraph>Fetching data...</Paragraph>}</GridWrapper>
      </Section>
    </UserTemplate>
  );
};

export default Pantry;
