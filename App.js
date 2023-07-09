/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Home from './src/screens/Home';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
`;


const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};


export default App;
