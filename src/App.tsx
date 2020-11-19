import React from 'react';
import {TodoContainer} from "./components/TodoContainer";
import styled from "styled-components";

const GlobalStyles = styled.div`
  .container {
    width: 1200px;
    min-width: 900px;
    margin: 0 auto;
  }
  .img {
    display: block;
  }
`

const App: React.FC = () => {
  return (
      <GlobalStyles>
        <TodoContainer />
      </GlobalStyles>
  );
}

export default App;
