import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
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
              <Input
                label
                // className="grid-input"
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Select
                // className="grid-input"
                label
                options={categories}
                id="category"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <Input
                label
                // className="grid-input"
                type="number"
                name="stock"
                id="stock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.stock}
              />
              <Input
                label
                // className="grid-input"
                type="number"
                name="maxStock"
                id="maxStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maxStock}
              />
              <Input
                label
                // className="grid-input"
                type="number"
                name="minStock"
                id="minStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minStock}
              />
              <Select
                label
                // className="grid-input"
                options={units}
                name="unit"
                id="unit"
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
