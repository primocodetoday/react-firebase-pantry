import React from 'react';
import { Section } from 'components/atoms';
import UserTemplate from '../../templates/UserTemplate/UserTemplate';
import Header from '../../components/molecules/Header/Header';

const SettingsPage = () => (
  <UserTemplate>
    <Section column>
      <Header
        titleText="Settings"
        subTitleText="Fill out the form to add a new item"
      />
    </Section>
  </UserTemplate>
);

export default SettingsPage;
