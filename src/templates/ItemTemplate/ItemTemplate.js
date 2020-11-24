import * as React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Paragraph, Fieldset, Input, ButtonIcon, Select } from 'atoms';
import { removeItem, changeItem, addStock, subStock } from 'redux/actions/pantryActions';
import { Header } from 'molecules';
import {
  Wrapper,
  Stock,
  ChangeStockWrapper,
  ButtonAdd,
  ButtonSub,
  Settings,
  ApplyIcon,
  Delete,
} from './ItemTemplate.styles';

const ItemTemplate = ({ id, item, units }) => {
  const { name, category, unit, maxStock, minStock, stock } = item;
  const [stockState, setNewStock] = React.useState();
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setNewStock(stock);
  }, [stock]);

  return (
    <Wrapper>
      <Header titleText={name} subTitleText={`category: ${category}`} />
      <Stock>
        <label htmlFor="stock">Stock</label>
        <Input id="stock" defaultValue={stockState} settings />
        <ChangeStockWrapper>
          <ButtonAdd icon="/assets/icons/plusIcon.svg" onClick={() => dispatch(addStock(id))} />
          <ButtonSub icon="/assets/icons/minusIcon.svg" onClick={() => dispatch(subStock(id))} />
        </ChangeStockWrapper>
      </Stock>
      <Fieldset legend="settings">
        <Formik
          initialValues={{ maxStock, minStock, unit }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(changeItem(id, values.maxStock, values.minStock, values.unit));
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
                icon="/assets/icons/applyIcon.svg"
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
          icon="/assets/icons/deleteIcon.svg"
          onClick={() => {
            dispatch(removeItem(id));
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
  id: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  units: PropTypes.arrayOf(PropTypes.string),
};

export default ItemTemplate;
