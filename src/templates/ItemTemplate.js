import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTemplate from './UserTemplate';
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

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 27px;
  padding-left: 70px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 70px;

  @media (max-width: 1355px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const StyledItemSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 96px;
`;

const StyledTitle = styled(Title)`
  font-size: 3rem;
  color: white;
  margin-bottom: 16px;
`;

const StyledCategory = styled(Paragraph)`
  color: white;
  margin-bottom: 50px;
  font-weight: 600;
`;

const StyledInfo = styled.section`
  flex-grow: 2;
`;

const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 1fr 96px;
  gap: 27px;

  label {
    font-size: 2rem;
  }
`;

const StyledDelete = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 96px;
  bottom: 56px;
`;

const StyledApplyIcon = styled(ButtonIcon)`
  background-size: 65%;
`;

const ItemTemplate = ({ removeItem, id, items, redirect }) => {
  const itemContent = items.filter((item) => item.id === id);
  const { name, category } = itemContent;

  return (
    <>
      <UserTemplate>
        <StyledWrapper>
          <StyledItemSection>
            <StyledTitle>{name}</StyledTitle>
            <StyledCategory>category: {category}</StyledCategory>
            Stock
            <Fieldset settings legend="settings">
              <StyledSettings>
                <label htmlFor="id">Maximum:</label>
                <Input id="max" settings />
                <label htmlFor="min">Minimum:</label>
                <Input id="min" settings />
                <label htmlFor="units">Units:</label>
                <Input type="switch" id="units" settings />
                <StyledDelete>
                  <Paragraph size="1.6rem">apply</Paragraph>
                  <StyledApplyIcon icon={applyIcon} />
                </StyledDelete>
              </StyledSettings>
            </Fieldset>
            <StyledDelete>
              <Paragraph size="1.6rem">delete item</Paragraph>
              <ButtonIcon
                icon={deleteIcon}
                onClick={() => {
                  redirect();
                  removeItem(id);
                }}
              />
            </StyledDelete>
          </StyledItemSection>
          <StyledInfo>Foto</StyledInfo>
        </StyledWrapper>
      </UserTemplate>
    </>
  );
};

ItemTemplate.propTypes = {
  redirect: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
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
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

// props: arg => dispatch(action(arg))

const mapStateToProps = (state) => {
  return { items: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemTemplate);
