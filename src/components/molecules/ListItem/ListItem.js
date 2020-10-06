import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Wrapper, Stock } from './styled/StyledListItem';

const ListItem = ({ name, stock, id, unit }) => {
  const [isRedirect, setRedirect] = useState({ redirect: false });

  const handleItemClick = () => setRedirect({ redirect: true });

  if (isRedirect.redirect) {
    return <Redirect to={`/pantry/${id}`} />;
  }
  return (
    <Wrapper onClick={handleItemClick}>
      <Paragraph>{name}</Paragraph>
      <Stock>{stock}</Stock>
      <Paragraph>{unit}</Paragraph>
    </Wrapper>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default ListItem;
