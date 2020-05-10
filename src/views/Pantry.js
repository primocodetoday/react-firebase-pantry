import React from 'react';
import styled from 'styled-components';
import PantryCard from '../components/molecules/PantryCard';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import {
  fruits,
  dairy,
  drinks,
  grains,
  meats,
  chemicals,
} from '../assets/icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  margin-left: 70px;
  flex-wrap: wrap;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleSection = styled(Title)`
  font-size: 2.5rem;
  color: white;
  margin-top: 17px;
`;

const categoryIcons = [
  {
    category: 'Fruits & Vegs',
    icon: fruits,
  },
  {
    category: 'Chemicals',
    icon: chemicals,
  },
  {
    category: 'Meats & Fishes',
    icon: meats,
  },
  {
    category: 'Grains & Nuts',
    icon: grains,
  },
  {
    category: 'Dairy Foods',
    icon: dairy,
  },
  {
    category: 'Drinks',
    icon: drinks,
  },
];

const cardList = categoryIcons.map((item) => (
  <PantryCard key={item.category} icon={item.icon} category={item.category} />
));

const Pantry = () => {
  return (
    <Wrapper>
      <Input search />
      <section>
        <TitleSection>Main</TitleSection>
        <p>Products</p>
      </section>
      <CardsWrapper>{cardList}</CardsWrapper>
    </Wrapper>
  );
};

export default Pantry;
