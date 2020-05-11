import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';

const UserWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.primary}};
  color: white;
  min-height: 100vh;
`;

const UserPage = ({ children }) => (
  <UserWrapper>
    <Sidebar />
    {children}
  </UserWrapper>
);

UserPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPage;
