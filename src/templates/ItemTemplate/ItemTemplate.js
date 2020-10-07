import React, { useState, useEffect } from 'react';
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
} from 'components/atoms';
import {
  removeItem as removeItemAction,
  changeItem as changeItemAction,
  addStock as addStockAction,
  subStock as subStockAction,
} from 'actions/pantryActions';
import { Header } from 'components/molecules';
import {
  Wrapper,
  Stock,
  ChangeStockWrapper,
  ButtonAdd,
  ButtonSub,
  Settings,
  ApplyIcon,
  Delete,
} from './styles/StyledItemTemplate';
import { deleteIcon, applyIcon, plusIcon, minusIcon } from '../../assets/icons';

const ItemTemplate = ({
  id,
  removeItem,
  item,
  history,
  changeItem,
  // unitsOptions,
  addStock,
  subStock,
  units,
}) => {
  // this is from Redux
  const { name, category, unit, maxStock, minStock, stock } = item;

  const [stockState, setNewStock] = useState();

  useEffect(() => {
    setNewStock(stock);
  }, [stock]);

  return (
    <Wrapper>
      <Header titleText={name} subTitleText={`category: ${category}`} />
      <Stock>
        <label htmlFor="stock">Stock</label>
        <Input id="stock" defaultValue={stockState} settings />
        <ChangeStockWrapper>
          <ButtonAdd icon={plusIcon} onClick={() => addStock(id)} />
          <ButtonSub icon={minusIcon} onClick={() => subStock(id)} />
        </ChangeStockWrapper>
      </Stock>
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
            <Settings onSubmit={handleSubmit}>
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
                name="unit"
                settings
                options={units}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unit}
              />
              <Paragraph className="grid-settings-7" size="1.6rem">
                Apply
              </Paragraph>
              <ApplyIcon
                className="grid-settings-8"
                type="submit"
                disabled={isSubmitting}
                icon={applyIcon}
              />
            </Settings>
          )}
        </Formik>
      </Fieldset>
      <Delete>
        <Paragraph style={{ marginRight: '20px' }} size="1.6rem">
          delete item
        </Paragraph>
        <ButtonIcon
          icon={deleteIcon}
          onClick={() => {
            removeItem(id);
            history.push('/');
          }}
        />
      </Delete>
    </Wrapper>
  );
};

ItemTemplate.defaultProps = {
  units: '',
};

ItemTemplate.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  changeItem: PropTypes.func.isRequired,
  addStock: PropTypes.func.isRequired,
  subStock: PropTypes.func.isRequired,
  units: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  changeItem: (id, maxStock, minStock, unit) =>
    dispatch(changeItemAction(id, maxStock, minStock, unit)),
  addStock: (id) => dispatch(addStockAction(id)),
  subStock: (id) => dispatch(subStockAction(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(ItemTemplate));
