﻿import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

const SubTitle = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
`;

SubTitle.defaultProps = defaultThemeProps;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
