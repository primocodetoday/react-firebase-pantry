import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Input, Select, Button } from 'atoms';
import { Header } from 'molecules';
import { addItem } from 'redux/actions/pantryActions';
import { UserTemplate } from 'templates';
import { newItemSchema } from 'models/newItemSchema';
import { StyledWrapper, StyledForm } from './NewItem.styles';

const NewItem = () => {
  const history = useHistory();

  useFirestoreConnect([{ collection: 'pantry' }, { collection: 'settings' }]);

  const units = useSelector((state) => {
    const { settings } = state.firestore.ordered;
    return settings ? settings[0].units : null;
  });

  const categories = useSelector((state) => {
    const { settings } = state.firestore.ordered;
    return settings ? settings[1].categories : null;
  });

  const dispatch = useDispatch();

  return (
    <UserTemplate>
      <StyledWrapper column>
        <Header titleText="New Item" subTitleText="Fill out the form to add a new item" />
        {/* TODO DEV - Formik validation to fix */}
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
            dispatch(addItem(values));
            setTimeout(() => {
              history.push('/');
            }, 600);
          }}
          validate={(values) => newItemSchema(values)}
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

export default NewItem;
