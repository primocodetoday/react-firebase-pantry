import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PantryCard from '../components/molecules/PantryCard';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  padding-left: 70px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 70px;
`;

const StyledHeader = styled.div`
  margin-bottom: 30px;
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;
  color: white;
  margin-top: 17px;
`;

const StyledCardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1355px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Pantry = ({ store }) => {
  const cardList = store.map(
    (item) =>
      item.list.length && (
        <PantryCard
          key={item.category}
          icon={item.icon}
          category={item.category}
          content={item.list}
        />
      ),
  );

  return (
    <StyledWrapper>
      <StyledHeader>
        <Input search placeholder="search" />
        <section>
          <StyledTitle>Pantry</StyledTitle>
          <p>Products</p>
        </section>
      </StyledHeader>
      <StyledCardsGridWrapper>{cardList}</StyledCardsGridWrapper>
    </StyledWrapper>
  );
};

Pantry.propTypes = {
  store: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pantry;
