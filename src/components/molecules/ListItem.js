import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 35px 25px;
  margin: 5px 0;
  cursor: pointer;
  color: ${(theme) => theme.primary};

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    font-size: 2.3rem;
  }
`;

const StyledStock = styled(Paragraph)`
  text-align: right;
  margin-right: 3px;
`;

const ListItem = ({ name, stock, id, unit }) => {
  const [isRedirect, setRedirect] = useState({ redirect: false });

  const handleItemClick = () => setRedirect({ redirect: true });

  if (isRedirect.redirect) {
    return <Redirect to={`/pantry/${id}`} />;
  }
  return (
    <StyledWrapper onClick={handleItemClick}>
      <Paragraph>{name}</Paragraph>
      <StyledStock>{stock}</StyledStock>
      <Paragraph>{unit}</Paragraph>
    </StyledWrapper>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default ListItem;
