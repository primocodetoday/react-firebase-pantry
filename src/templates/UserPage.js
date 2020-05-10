import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar';

const UserPage = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPage;
