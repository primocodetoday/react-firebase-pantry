import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Topbar from 'components/organisms/Topbar/Topbar';
import useWindowWidth from 'hooks/useWindowWidth';
import { signOut as signOutAction } from '../../actions/authActions';
import { UserWrapper } from './styles/StyledUserTemplate';

const UserTemplate = ({ children, signOut }) => {
  const { width } = useWindowWidth();

  return (
    <UserWrapper>
      {width > 600 ? <Sidebar signOut={signOut} /> : <Topbar signOut={signOut} />}
      {children}
    </UserWrapper>
  );
};

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAction()),
});

export default connect(null, mapDispatchToProps)(UserTemplate);
