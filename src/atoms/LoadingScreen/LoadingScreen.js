import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '..';
import { GlobalStyles } from '../../theme/GlobalStyles';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: #0d2743;
`;

const LoadingScreen = () => (
  <StyledWrapper>
    <GlobalStyles />
    <Paragraph size="3rem">Loading...</Paragraph>
  </StyledWrapper>
);

export default LoadingScreen;
