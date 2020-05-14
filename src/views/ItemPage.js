import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemTemplate from '../templates/ItemTemplate';
import UserTemplate from '../templates/UserTemplate';
import InfoTemplate from '../templates/InfoTemplate';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 27px;
  padding-left: 50px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 50px;
  justify-content: space-around;
  @media (max-width: 1355px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 960px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ItemPage = ({ match, items }) => {
  const [itemId, setItemId] = useState(0);

  // filtrowanie items według id
  const [itemContent] = items.filter((item) => item.id === itemId);

  // wyciąganie id z adresu
  useEffect(() => {
    const currentId = Number(match.params.id);
    setItemId(currentId);
  }, [itemId, match.params.id]);

  return (
    <UserTemplate>
      <StyledWrapper>
        <ItemTemplate id={itemId} item={itemContent} />
        <InfoTemplate item={itemContent} />
      </StyledWrapper>
    </UserTemplate>
  );
};

ItemPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      maxStock: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return { items: state };
};

export default connect(mapStateToProps)(withRouter(ItemPage));
