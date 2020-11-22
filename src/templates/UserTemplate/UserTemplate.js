import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import TopBar from 'components/organisms/Topbar/Topbar';
import useWindowWidth from 'hooks/useWindowWidth';
import { UserWrapper } from './styles/styles';

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
