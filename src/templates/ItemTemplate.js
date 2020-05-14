import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Title,
  Paragraph,
  Fieldset,
  Input,
  ButtonIcon,
} from '../components/atoms';
import { removeItem as removeItemAction } from '../actions';

import deleteIcon from '../assets/icons/delete.svg';
import applyIcon from '../assets/icons/apply.svg';

const StyledItem = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 25px;
`;

const StyledTitle = styled(Title)`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const StyledCategory = styled(Paragraph)`
  color: white;
  margin-bottom: 30px;
  font-weight: 600;
`;

const StyledSettings = styled.form`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 50px;
  gap: 20px;

  label {
    font-size: 2rem;
  }
`;
const StyledStock = styled.div`
  display: grid;
  grid-template-columns: 1fr 96px 50px;
  gap: 27px;
  margin-bottom: 30px;

  label {
    font-size: 3rem;
  }
  input {
    font-size: 2.5rem;
  }
`;

const StyledApply = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/3;
  justify-self: end;
  align-self: end;
`;
const StyledDelete = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const StyledApplyIcon = styled(ButtonIcon)`
  background-size: 65%;
`;

const ItemTemplate = ({ removeItem, id, item, history }) => {
  const { name, category, unit, maxStock } = item;

  const [formState, setFormState] = useState({
    stock: '',
    unit: '',
    maxStock: '',
  });

  const handleSettingsChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleRedirect = () => history.push('/');

  return (
    <StyledItem>
      <StyledTitle>{name}</StyledTitle>
      <StyledCategory>category: {category}</StyledCategory>
      <StyledStock>
        <label htmlFor="stock">Stock</label>
        <Input id="stock" settings />
      </StyledStock>
      <Fieldset settings legend="settings">
        <StyledSettings>
          <label htmlFor="maxStock">Maximum:</label>
          <Input
            id="maxStock"
            settings
            placeholder={maxStock}
            value={formState.maxStock}
            onChange={handleSettingsChange}
          />
          <label htmlFor="minStock">Minimum:</label>
          <Input id="minStock" settings onChange={handleSettingsChange} />
          <label htmlFor="unit">Units:</label>
          <Input
            type="switch"
            id="unit"
            settings
            placeholder={unit}
            value={formState.unit}
            onChange={handleSettingsChange}
          />
          <StyledApply>
            <Paragraph size="1.6rem">apply</Paragraph>
            <StyledApplyIcon type="submit" icon={applyIcon} />
          </StyledApply>
        </StyledSettings>
      </Fieldset>
      <StyledDelete>
        <Paragraph size="1.6rem">delete item</Paragraph>
        <ButtonIcon
          icon={deleteIcon}
          onClick={() => {
            removeItem(id);
            handleRedirect();
          }}
        />
      </StyledDelete>
    </StyledItem>
  );
};

ItemTemplate.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(ItemTemplate));
