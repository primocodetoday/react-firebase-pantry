import React from 'react';
import UserTemplate from '../../templates/UserTemplate/UserTemplate';
import Header from '../../components/molecules/Header/Header';
import SectionWrapper from '../../components/atoms/SectionWrapper/SectionWrapper';

const ShopListPage = () => (
  <UserTemplate>
    <SectionWrapper column>
      <Header
        titleText="Shop List"
        subTitleText="The list is generated automatically based on the product settings"
      />
    </SectionWrapper>
  </UserTemplate>
);

export default ShopListPage;
