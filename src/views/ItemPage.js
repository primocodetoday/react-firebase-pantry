import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';
import InfoTemplate from '../templates/InfoTemplate';
import SectionWrapper from '../templates/SectionWrapper';

const ItemPage = ({ match, pantry }) => {
  const [itemId, setItemId] = useState(0);

  const filterIdById = (arr, id) => {
    const [item] = arr.filter((product) => product.id === id);
    return item ? item.id : null;
  };

  const filterItemById = (arr, id) => {
    const [item] = arr.filter((product) => product.id === id);
    return item || null;
  };

  // current id from url
  useEffect(() => {
    const currentId = match.params.id;
    setItemId(currentId);
  }, [match.params.id]);

  // passing to => ItemTemplete => Select Input
  const extractUnits = (arr) => {
    const units = [...new Set(arr.map((product) => product.unit))];
    return units || null;
  };

  return (
    <UserTemplate>
      {pantry ? (
        <SectionWrapper wrap="true">
          <ItemTemplate
            id={filterIdById(pantry, itemId)}
            item={filterItemById(pantry, itemId)}
            unitsOptions={extractUnits(pantry)}
          />
          <InfoTemplate item={filterItemById(pantry, itemId)} />
        </SectionWrapper>
      ) : (
        <p>Fetching</p>
      )}
    </UserTemplate>
  );
};

ItemPage.propTypes = {
  pantry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      minStock: PropTypes.number.isRequired,
      maxStock: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  const pantryState = state.firestore.ordered.pantry;
  const pantry = pantryState || null;
  return {
    pantry,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'pantry',
    },
  ]),
)(withRouter(ItemPage));
