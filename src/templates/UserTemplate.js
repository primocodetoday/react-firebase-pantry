import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';
import Topbar from '../components/organisms/Topbar';
import { useWindowWidth } from '../hooks';

const UserWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  min-height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const UserTemplate = ({ children }) => {
  const { width } = useWindowWidth();
  console.log(width);

  return (
    <UserWrapper>
      {width > 700 ? <Sidebar /> : <Topbar />}
      {children}
    </UserWrapper>
  );
};

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
