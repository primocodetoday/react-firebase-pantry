import React from 'react';
import UserTemplate from '../templates/UserTemplate';
import Header from '../components/molecules/Header';

const ShopListPage = () => (
  <UserTemplate>
    <Header
      titleText="Shop List"
      subTitleText="The list is generated automatically based on the product settings"
    />
  </UserTemplate>
);

export default ShopListPage;
