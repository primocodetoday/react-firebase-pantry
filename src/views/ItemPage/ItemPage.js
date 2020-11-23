﻿import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { ItemTemplate, UserTemplate, InfoTemplate } from 'templates';
import { Paragraph, Section } from 'atoms';
import { useParams } from 'react-router-dom';

const ItemPage = ({ item, units }) => {
  const { id } = useParams();

  return (
    <UserTemplate>
      {item ? (
        <Section wrap>
          <ItemTemplate item={item} id={id} units={units} />
          <InfoTemplate item={item} />
        </Section>
      ) : (
        <Paragraph>Fetching data...</Paragraph>
      )}
    </UserTemplate>
  );
};

ItemPage.defaultProps = {
  item: '',
  units: '',
};

ItemPage.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    minStock: PropTypes.number.isRequired,
    maxStock: PropTypes.number.isRequired,
  }),
  units: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { pantry } = state.firestore.data;
  const item = pantry ? pantry[id] : null;
  // extracting Select options
  const { settings } = state.firestore.ordered;
  const units = settings ? settings[0].units : null;

  return {
    item,
    units,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'pantry',
    },
    {
      collection: 'settings',
    },
  ]),
)(ItemPage);
