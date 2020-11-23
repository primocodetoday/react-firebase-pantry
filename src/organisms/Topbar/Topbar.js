import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { ROUTES } from 'routes';
import { Paragraph, Logo } from 'atoms';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/actions/authActions';
import { menuItems } from '../../constants/menuItems';
import { Wrapper, BurgerWrapper } from './styles/styles';

const Topbar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Logo to={ROUTES.home} />
      <BurgerWrapper>
        <Menu right>
          {menuItems.map((item) => (
            <NavLink to={item.route} key={item.name} activeclass="active">
              {item.name}
            </NavLink>
          ))}
          <Paragraph onClick={() => dispatch(signOut())}>Logout</Paragraph>
        </Menu>
      </BurgerWrapper>
    </Wrapper>
  );
};

export default Topbar;
