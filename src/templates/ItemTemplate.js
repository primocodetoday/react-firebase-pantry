import React from 'react';
import PropTypes from 'prop-types';
import UserTemplate from './UserTemplate';

const ItemTemplate = ({ children }) => (
  <>
    <UserTemplate>{children}</UserTemplate>{' '}
  </>
);

ItemTemplate.propTypes = { children: PropTypes.node.isRequired };

export default ItemTemplate;
