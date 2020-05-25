import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Paragraph } from '../components/atoms/index';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';
import InfoTemplate from '../templates/InfoTemplate';
import SectionWrapper from '../templates/SectionWrapper';

const ItemPage = ({ match, item, units }) => {
  const { id } = match.params;

  return (
    <UserTemplate>
      {item ? (
        <SectionWrapper wrap="true">
          <ItemTemplate item={item} id={id} units={units} />
          <InfoTemplate item={item} />
        </SectionWrapper>
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  units: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { pantry } = state.firestore.data;
  const item = pantry ? pantry[id] : null;
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
