import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'organisms/Sidebar/Sidebar';
import TopBar from 'organisms/Topbar/Topbar';
import useWindowWidth from 'hooks/useWindowWidth';
import { UserWrapper } from './UserTemplate.styles';

const UserTemplate = ({ children }) => {
  const { width } = useWindowWidth();

  return (
    <UserWrapper>
      {width > 600 ? <Sidebar /> : <TopBar />}
      {children}
    </UserWrapper>
  );
};

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
