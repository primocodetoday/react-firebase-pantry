import React from 'react';
import { Section } from 'atoms';
import UserTemplate from 'templates/UserTemplate/UserTemplate';
import { Header, Basket } from 'molecules';

const ShopListPage = () => (
  <UserTemplate>
    <Section column>
      <Header titleText="Shop List" subTitleText="The list is generated automatically based on the product settings" />
      <Basket>
        <p>...list</p>
      </Basket>
    </Section>
  </UserTemplate>
);

export default ShopListPage;
