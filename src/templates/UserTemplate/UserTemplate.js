import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import TopBar from 'components/organisms/Topbar/Topbar';
import useWindowWidth from 'hooks/useWindowWidth';
import { signOut as signOutAction } from '../../actions/authActions';

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

const UserTemplate = ({ children, signOut }) => {
  const { width } = useWindowWidth();

  return (
    <UserWrapper>
      {width > 600 ? (
        <Sidebar signOut={signOut} />
      ) : (
        <TopBar signOut={signOut} />
      )}
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
