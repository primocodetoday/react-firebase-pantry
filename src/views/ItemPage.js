import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';
import InfoTemplate from '../templates/InfoTemplate';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 27px;
  padding-left: 50px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 50px;
  justify-content: space-around;
  @media (max-width: 1355px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 960px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ItemPage = ({ match, items }) => {
  const [itemId, setItemId] = useState(0);

  // filter items by requested id
  const [item] = items.filter((product) => product.id === itemId);

  // current id from url
  useEffect(() => {
    const currentId = Number(match.params.id);
    setItemId(currentId);
  }, [match.params.id]);

  // => ItemTemplete => Select
  const unitsOptions = [...new Set(items.map((product) => product.unit))];

  return (
    <UserTemplate>
      {item ? (
        <StyledWrapper>
          <ItemTemplate id={itemId} item={item} unitsOptions={unitsOptions} />
          <InfoTemplate item={item} />
        </StyledWrapper>
      ) : (
        <p>Fetching</p>
      )}
    </UserTemplate>
  );
};

ItemPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      minStock: PropTypes.string.isRequired,
      maxStock: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return { items: state };
};

export default connect(mapStateToProps)(withRouter(ItemPage));
