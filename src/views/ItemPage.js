import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';

const ItemPage = ({ location, history }) => {
  const [itemId, setItemId] = useState(1);

  const handleRedirect = () => history.push('/');

  useEffect(() => {
    const { pathname } = location;
    const currentId = Number(pathname.match(/\d+/g));
    setItemId(currentId);
  }, [location]);

  return (
    <ItemTemplate id={itemId} redirect={handleRedirect}>
      <p>Hello</p>
    </ItemTemplate>
  );
};

ItemPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(ItemPage);
