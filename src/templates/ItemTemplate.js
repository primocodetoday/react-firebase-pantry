import React from 'react';
import styled from 'styled-components';
import UserTemplate from './UserTemplate';
import Title from '../components/atoms/Title';
import Paragraph from '../components/atoms/Paragraph';
import Fieldset from '../components/atoms/Fieldset';
import Input from '../components/atoms/Input';

const StyledWrapper = styled.div`
  display: flex;
  padding-top: 27px;
  padding-left: 70px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 70px;
`;

const StyledItem = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 96px;
`;

const StyledTitle = styled(Title)`
  font-size: 5rem;
  color: white;
  margin-top: 17px;
  margin-bottom: 16px;
`;

const StyledParagrpah = styled(Paragraph)`
  color: white;
  margin-bottom: 81px;
  font-weight: 600;
`;

const StyledInfo = styled.section`
  flex-grow: 2;
`;

const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 1fr 96px;
  gap: 30px;

  label {
    font-size: 2.5rem;
  }
`;

const ItemTemplate = () => (
  <>
    <UserTemplate>
      <StyledWrapper>
        <StyledItem>
          <StyledTitle>Carrots</StyledTitle>
          <StyledParagrpah>category: Fruits & Vegs</StyledParagrpah>
          Stock
          <Fieldset settings legend="settings">
            <StyledSettings>
              <label htmlFor="id">Maximum:</label>
              <Input id="max" settings />
              <label htmlFor="min">Minimum:</label>
              <Input id="min" settings />
              <label htmlFor="units">Units:</label>
              <Input type="switch" id="units" settings />
              Apply <button type="button"> ok</button>
            </StyledSettings>
          </Fieldset>
        </StyledItem>
        <StyledInfo>Foto</StyledInfo>
      </StyledWrapper>
    </UserTemplate>
  </>
);

export default ItemTemplate;
