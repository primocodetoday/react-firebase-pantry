import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

const StyledWrapper = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px;
  margin: 5px 0;
  cursor: pointer;
  color: ${(theme) => theme.primary};
`;

const ListItem = ({ name, stock, id }) => {
  const [isRedirect, setRedirect] = useState({ redirect: false });

  const handleItemClick = () => setRedirect({ redirect: true });

  if (isRedirect.redirect) {
    return <Redirect to={`/pantry/${id}`} />;
  }
  return (
    <StyledWrapper onClick={handleItemClick}>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{stock}</Paragraph>
    </StyledWrapper>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListItem;
