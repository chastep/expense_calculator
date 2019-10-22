import React from 'react';
import { Segment, Header } from 'semantic-ui-react'
import Calculator from './Calculator';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <Header
        className="app-container__header"
        as='h1'
      >
        Expense Calculator 5000™️
      </Header>
      <Segment>
        <p>
          Welcome to the Expense Calculator 5000™️! Please input a few personal details below to calculate how much your benefits will cost you and your family during the next fiscal year.
        </p>
      </Segment>
      <Calculator />
    </div>
  );
}

export default App;
