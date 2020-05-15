import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTemplate from '../templates/UserTemplate';
import { Title } from '../components/atoms';
import { addItem } from '../actions';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

const StyledTitle = styled(Title)`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const NewPage = ({ handleAddItem }) => {
  return (
    <UserTemplate>
      <StyledWrapper>
        <StyledTitle
          onClick={() =>
            handleAddItem({
              category: 'test',
              name: 'test',
              stock: 15,
              unit: 'test',
              maxStock: 30,
            })
          }
        >
          New Item
        </StyledTitle>
      </StyledWrapper>
    </UserTemplate>
  );
};

NewPage.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(NewPage);
