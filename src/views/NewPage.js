import React from 'react';
import styled from 'styled-components';
import UserTemplate from '../templates/UserTemplate';
import { Title } from '../components/atoms';

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

const NewPage = () => {
  return (
    <UserTemplate>
      <StyledWrapper>
        <StyledTitle>New Item</StyledTitle>
      </StyledWrapper>
    </UserTemplate>
  );
};

export default NewPage;
