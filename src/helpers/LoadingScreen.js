import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../components/atoms';
import GlobalStyles from '../theme/GlobalStyles';

const StyledWrapper = styled.div`
  height: 100vh;
  background-color: #0d2743;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LoadingScreen = () => (
  <StyledWrapper>
    <GlobalStyles />
    <Paragraph size="3rem">Loading...</Paragraph>
  </StyledWrapper>
);

export default LoadingScreen;
