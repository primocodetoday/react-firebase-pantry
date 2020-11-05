import React from 'react';
import { Section } from 'components/atoms';
import { Header } from 'components/molecules';
import UserTemplate from '../../templates/UserTemplate/UserTemplate';

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
