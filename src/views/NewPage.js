import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTemplate from '../templates/UserTemplate';
import { Input, Select, Button } from '../components/atoms';
import { addItem } from '../actions';
import Header from '../components/molecules/Header';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 30vw;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  flex-wrap: wrap;
  padding-right: 70px;
  justify-content: flex-start;

  @media (max-width: 1355px) {
    width: 40vw;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  margin-bottom: 15px;
`;

const NewPage = ({ handleAddItem, items }) => {
  const [formState, setFormState] = useState({
    name: '',
    stock: '',
    category: '',
    maxStock: '',
    minStock: '',
    unit: '',
  });

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const categoryOptions = [...new Set(items.map((item) => item.category))];
  const unitsOptions = [...new Set(items.map((item) => item.unit))];

  return (
    <UserTemplate>
      <StyledWrapper>
        <Header
          titleText="New Item"
          subTitleText="Fill out the form to add a new item"
        />
        <StyledInput
          id="name"
          placeholder="Name"
          onChange={handleFormChange}
          value={formState.name}
        />
        <StyledInput
          id="stock"
          placeholder="Stock"
          onChange={handleFormChange}
          value={formState.stock}
        />
        <StyledInput
          id="maxStock"
          placeholder="max stock"
          onChange={handleFormChange}
          value={formState.maxStock}
        />
        <StyledInput
          id="minStock"
          placeholder="min stock"
          onChange={handleFormChange}
          value={formState.minStock}
        />
        <Select
          label
          options={categoryOptions}
          id="category"
          onChange={handleFormChange}
          value={formState.category}
        />
        <Select
          label
          options={unitsOptions}
          id="units"
          onChange={handleFormChange}
          value={formState.unit}
        />
        <Button onClick={() => handleAddItem(formState)}>Add Item</Button>
      </StyledWrapper>
    </UserTemplate>
  );
};

NewPage.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      minStock: PropTypes.string.isRequired,
      maxStock: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state) => {
  return { items: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
