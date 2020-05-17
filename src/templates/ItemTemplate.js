import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Paragraph,
  Fieldset,
  Input,
  ButtonIcon,
  Select,
} from '../components/atoms';
import { removeItem as removeItemAction, changeItemSettings } from '../actions';
import Header from '../components/molecules/Header';
import deleteIcon from '../assets/icons/delete.svg';
import applyIcon from '../assets/icons/apply.svg';

const StyledItem = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 25px;
`;

const StyledSettings = styled.form`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 100px;
  gap: 15px;
  align-items: center;

  .grid-settings-6 {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .grid-settings-7 {
    grid-column: 1/2;
    grid-row: 4/5;
    justify-self: end;
  }
  .grid-settings-8 {
    grid-column: 2/3;
    grid-row: 4/5;
    justify-self: center;
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

const StyledDelete = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledApplyIcon = styled(ButtonIcon)`
  background-size: 65%;
`;

const ItemTemplate = ({
  removeItem,
  id,
  item,
  history,
  changeItem,
  unitsOptions,
}) => {
  // this is from Redux
  const { name, category, unit, maxStock, minStock } = item;

  const handleRedirect = () => history.push('/');

  return (
    <StyledItem>
      <Header titleText={name} subTitleText={`category: ${category}`} />
      <StyledStock>
        <label htmlFor="stock">Stock</label>
        <Input id="stock" settings />
      </StyledStock>
      <Fieldset settings legend="settings">
        <Formik
          initialValues={{ maxStock, minStock, unit }}
          onSubmit={(values, { setSubmitting }) => {
            changeItem(id, values.maxStock, values.minStock, values.unit);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <StyledSettings onSubmit={handleSubmit}>
              <label className="grid-settings-1" htmlFor="maxStock">
                Maximum:
              </label>
              <Input
                className="grid-settings-2"
                settings
                type="number"
                name="maxStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maxStock}
              />
              <label className="grid-settings-3" htmlFor="minStock">
                Minimum:
              </label>
              <Input
                className="grid-settings-4"
                settings
                type="number"
                name="minStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minStock}
              />
              <label className="grid-settings-5" htmlFor="unit">
                Units:
              </label>
              <Select
                className="grid-settings-6"
                label
                name="unit"
                settings
                options={unitsOptions}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unit}
              />
              <Paragraph className="grid-settings-7" size="1.6rem">
                Apply
              </Paragraph>
              <StyledApplyIcon
                className="grid-settings-8"
                type="submit"
                disabled={isSubmitting}
                icon={applyIcon}
              />
            </StyledSettings>
          )}
        </Formik>
      </Fieldset>
      <StyledDelete>
        <Paragraph style={{ marginRight: '20px' }} size="1.6rem">
          delete item
        </Paragraph>
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
  changeItem: PropTypes.func.isRequired,
  unitsOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  changeItem: (id, maxStock, minStock, unit) =>
    dispatch(changeItemSettings(id, maxStock, minStock, unit)),
});

export default connect(null, mapDispatchToProps)(withRouter(ItemTemplate));
