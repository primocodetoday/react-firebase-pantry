import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import GlobalStyles from '../theme/globalStyle';
import Main from '../components/Main';

Root.propTypes = {};

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #123c69;
  color: white;
  min-height: 100vh;
  max-width: 1407px;
`;

function Root() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <section>Infos</section>
      <Main />
    </Wrapper>
  );
}

Root.propTypes = {};

export default Root;
