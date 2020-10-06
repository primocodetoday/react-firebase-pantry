import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { Paragraph, Logo } from 'components/atoms';
import { menuItems } from '../menuItems';
import { Wrapper, BurgerWrapper } from './styled/StyledTopbar';

const Topbar = ({ signOut }) => {
  return (
    <Wrapper>
      <Logo to={routes.home} />
      <BurgerWrapper>
        <Menu right>
          {menuItems.map((item) => (
            <NavLink to={item.route} key={item.name} activeclass="active">
              {item.name}
            </NavLink>
          ))}
          <Paragraph onClick={signOut}>Logout</Paragraph>
        </Menu>
      </BurgerWrapper>
    </Wrapper>
  );
};

Topbar.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Topbar;
