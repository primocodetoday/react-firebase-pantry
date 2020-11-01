import React from 'react';
import { Section } from 'components/atoms';
import UserTemplate from '../../templates/UserTemplate/UserTemplate';
import Header from '../../components/molecules/Header/Header';

const ShopListPage = () => (
  <UserTemplate>
    <Section column>
      <Header
        titleText="Shop List"
        subTitleText="The list is generated automatically based on the product settings"
      />
    </Section>
  </UserTemplate>
);

export default ShopListPage;
