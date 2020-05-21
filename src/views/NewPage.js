import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import UserTemplate from '../templates/UserTemplate';
import { Input, Select, Button } from '../components/atoms';
import { addItem } from '../actions';
import Header from '../components/molecules/Header';
import SectionWrapper from '../templates/SectionWrapper';

const StyledWrapper = styled(SectionWrapper)`
  width: auto;
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 80px 150px;
  align-items: center;
  gap: 10px;

  .grid-label {
    grid-column: 1/2;
  }

  .grid-button {
    justify-self: end;
    align-self: center;
    grid-column: 3/4;
    margin-top: 20px;
  }
  .grid-input {
    text-align: center;
    grid-column: 3/4;
  }
`;

const NewPage = ({ handleAddItem, items, history }) => {
  const categoryOptions = [...new Set(items.map((item) => item.category))];
  const unitsOptions = [...new Set(items.map((item) => item.unit))];

  const handleRedirect = (route) => history.push(route);

  return (
    <UserTemplate>
      <StyledWrapper column>
        <Header
          titleText="New Item"
          subTitleText="Fill out the form to add a new item"
        />
        <Formik
          initialValues={{
            name: '',
            stock: '',
            maxStock: '',
            minStock: '',
            category: '',
            unit: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
            handleAddItem(values);
            handleRedirect('/');
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'required';
            } else if (!values.category) {
              errors.category = 'required';
            } else if (
              !/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(
                values.stock,
              )
            ) {
              errors.stock = 'wrong number';
            } else if (
              !/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(
                values.maxStock,
              )
            ) {
              errors.maxStock = 'wrong number';
            } else if (
              !/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(
                values.minStock,
              )
            ) {
              errors.minStock = 'wrong number';
            } else if (!values.unit) {
              errors.unit = 'required';
            }
            return errors;
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <label className="grid-label" htmlFor="name">
                Name:
              </label>
              <ErrorMessage name="name" />
              <Input
                className="grid-input"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label className="grid-label" htmlFor="category">
                Category:
              </label>
              <ErrorMessage name="category" />
              <Select
                className="grid-input"
                label
                options={categoryOptions}
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <label className="grid-label" htmlFor="stock">
                Stock:
              </label>
              <ErrorMessage name="stock" />
              <Input
                className="grid-input"
                type="number"
                name="stock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.stock}
              />
              <label className="grid-label" htmlFor="maxStock">
                Max Stock:
              </label>
              <ErrorMessage name="maxStock" />
              <Input
                className="grid-input"
                type="number"
                name="maxStock"
                placeholder="max"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maxStock}
              />
              <label className="grid-label" htmlFor="minStock">
                Min Stock:
              </label>
              <ErrorMessage name="minStock" />
              <Input
                className="grid-input"
                type="number"
                name="minStock"
                placeholder="min"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minStock}
              />
              <label className="grid-label" htmlFor="unit">
                Units:
              </label>
              <ErrorMessage name="unit" />
              <Select
                className="grid-input"
                placeholder="chose unit"
                label
                options={unitsOptions}
                name="unit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unit}
              />
              <Button
                className="grid-button"
                type="submit"
                disabled={isSubmitting}
              >
                Add Item
              </Button>
            </StyledForm>
          )}
        </Formik>
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
      stock: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      minStock: PropTypes.number.isRequired,
      maxStock: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state) => {
  return { items: state.pantry };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NewPage));
