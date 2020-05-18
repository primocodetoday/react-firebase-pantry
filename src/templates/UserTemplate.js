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

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    flex-direction: column;
  }
`;

const UserTemplate = ({ children }) => {
  const { width } = useWindowWidth();

  return (
    <UserWrapper>
      {width > 600 ? <Sidebar /> : <Topbar />}
      {children}
    </UserWrapper>
  );
};

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
