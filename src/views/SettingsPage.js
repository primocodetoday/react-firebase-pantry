import React from 'react';
import UserTemplate from '../templates/UserTemplate';
import Header from '../components/molecules/Header';

const SettingsPage = () => (
  <UserTemplate>
    <Header
      titleText="Settings"
      subTitleText="Fill out the form to add a new item"
    />
  </UserTemplate>
);

export default SettingsPage;
