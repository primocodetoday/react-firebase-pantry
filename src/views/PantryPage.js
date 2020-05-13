import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PantryCard from '../components/molecules/PantryCard';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import UserTemplate from '../templates/UserTemplate';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  padding-left: 70px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 70px;

  @media (max-width: 1355px) {
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

  @media (max-width: 1355px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PantryPage = ({ items }) => {
  const cardList = items.map(
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
    <UserTemplate>
      <StyledWrapper>
        <StyledHeader>
          <Input search placeholder="search" />
          <section>
            <StyledTitle>Pantry</StyledTitle>
            <p>Products</p>
          </section>
        </StyledHeader>
        <StyledGridWrapper>{cardList}</StyledGridWrapper>
      </StyledWrapper>
    </UserTemplate>
  );
};

const mapStatetoProps = (state) => {
  return { items: state };
};

PantryPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          stock: PropTypes.number.isRequired,
          unit: PropTypes.string.isRequired,
          maxStock: PropTypes.number.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default connect(mapStatetoProps)(PantryPage);
