import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';
import InfoTemplate from '../templates/InfoTemplate';
import SectionWrapper from '../templates/SectionWrapper';

const ItemPage = ({ match, items }) => {
  const [itemId, setItemId] = useState(0);

  // filter items by requested id
  const [item] = items.filter((product) => product.id === itemId);

  // current id from url
  useEffect(() => {
    const currentId = Number(match.params.id);
    setItemId(currentId);
  }, [match.params.id]);

  // passing to => ItemTemplete => Select Input
  const unitsOptions = [...new Set(items.map((product) => product.unit))];

  return (
    <UserTemplate>
      {item ? (
        <SectionWrapper wrap="true">
          <ItemTemplate id={itemId} item={item} unitsOptions={unitsOptions} />
          <InfoTemplate item={item} />
        </SectionWrapper>
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
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      minStock: PropTypes.number.isRequired,
      maxStock: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return { items: state.pantry };
};

export default connect(mapStateToProps)(withRouter(ItemPage));
