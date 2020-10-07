import React from 'react';
import UserTemplate from '../../templates/UserTemplate/UserTemplate';
import Header from '../../components/molecules/Header/Header';
import SectionWrapper from '../../components/atoms/SectionWrapper/SectionWrapper';

const SettingsPage = () => (
  <UserTemplate>
    <SectionWrapper column>
      <Header
        titleText="Settings"
        subTitleText="Fill out the form to add a new item"
      />
    </SectionWrapper>
  </UserTemplate>
);

export default SettingsPage;
