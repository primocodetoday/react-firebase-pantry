import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paragraph } from 'components/atoms';
import { Wrapper, Stock } from './styles/StyledListItem';

export const ListItem = ({ name, stock, id, unit, ...restProps }) => {
  const [isRedirect, setRedirect] = useState({ redirect: false });

  const handleItemClick = () => setRedirect({ redirect: true });

  if (isRedirect.redirect) {
    return <Redirect to={`/pantry/${id}`} />;
  }
  return (
    <Wrapper onClick={handleItemClick} {...restProps}>
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
