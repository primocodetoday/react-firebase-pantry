import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';

const ItemPage = ({ match }) => {
  const [itemId, setItemId] = useState(0);

  // wyciąganie id z adresu
  useEffect(() => {
    const currentId = Number(match.params.id);
    setItemId(currentId);
  }, [itemId, match.params.id]);

  return (
    <UserTemplate>
      <ItemTemplate id={itemId}>
        <p>Hello</p>
      </ItemTemplate>
    </UserTemplate>
  );
};

ItemPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(ItemPage);
