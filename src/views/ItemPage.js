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

const ItemPage = ({ match, item }) => {
  const { id } = match.params;

  return (
    <UserTemplate>
      {item ? (
        <SectionWrapper wrap="true">
          <ItemTemplate item={item} id={id} />
          <InfoTemplate item={item} />
        </SectionWrapper>
      ) : (
        <Paragraph>Fetching data...</Paragraph>
      )}
    </UserTemplate>
  );
};

ItemPage.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    minStock: PropTypes.number.isRequired,
    maxStock: PropTypes.number.isRequired,
  }).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { pantry } = state.firestore.data;
  const item = pantry ? pantry[id] : null;
  return {
    item,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'pantry',
    },
  ]),
)(ItemPage);
