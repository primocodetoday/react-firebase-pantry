import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { Input, Select, Button } from 'components/atoms';
import { Header } from 'components/molecules';
import { addItem } from 'redux/actions/pantryActions';
import { UserTemplate } from 'templates';
import { StyledWrapper, StyledForm } from './styles/StyledNewPage';

const NewPage = ({ handleAddItem, history, units, categories }) => {
  return (
    <UserTemplate>
      <StyledWrapper column>
        <Header titleText="New Item" subTitleText="Fill out the form to add a new item" />
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
            history.push('/');
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'required';
            } else if (!values.category) {
              errors.category = 'required';
            } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.stock)) {
              errors.stock = 'wrong number';
            } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.maxStock)) {
              errors.maxStock = 'wrong number';
            } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.minStock)) {
              errors.minStock = 'wrong number';
            } else if (!values.unit) {
              errors.unit = 'required';
            }
            return errors;
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
                options={categories}
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
                options={units}
                name="unit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unit}
              />
              <Button className="grid-button" type="submit" disabled={isSubmitting}>
                Add Item
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    </UserTemplate>
  );
};

NewPage.defaultProps = {
  units: [],
  categories: [],
};

NewPage.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  units: PropTypes.arrayOf(PropTypes.any),
  categories: PropTypes.arrayOf(PropTypes.any),
};

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state) => {
  const { settings } = state.firestore.ordered;
  const units = settings ? settings[0].units : null;
  const categories = settings ? settings[1].categories : null;

  return {
    units,
    categories,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: 'settings',
    },
  ]),
)(withRouter(NewPage));
