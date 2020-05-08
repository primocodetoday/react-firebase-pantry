import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import GlobalStyles from '../theme/GlobalStyles';
import Main from '../components/Main';

const Wrapper = styled.div`
  padding: 10px;
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
      <section>
        Hey. This is my Pantry App…..I did it to practice React..... Click the
        new item to add. Click an item to change. The shopping list is
        automatic, but you can manually add an item
      </section>
      <Main />
    </Wrapper>
  );
}

Root.propTypes = {};

export default Root;
