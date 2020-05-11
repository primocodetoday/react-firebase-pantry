import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';

const UserWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  min-height: 100vh;
`;

const UserTemplate = ({ children }) => (
  <UserWrapper>
    <Sidebar />
    {children}
  </UserWrapper>
);

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
