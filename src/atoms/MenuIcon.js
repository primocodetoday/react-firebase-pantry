import * as React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuIcon = ({ src, alt, ...restProps }) => {
  return (
    <Link {...restProps}>
      <Icon src={src} alt={alt} />
    </Link>
  );
};

const Link = styled(NavLink)`
  cursor: pointer;

  &.active img {
    filter: invert(28%) sepia(92%) saturate(913%) hue-rotate(302deg) brightness(87%) contrast(85%);
  }

  &:last-child {
    align-self: end;
    margin-bottom: 30px;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

MenuIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MenuIcon;
