import React from 'react';
import { Header, Message } from 'semantic-ui-react'
import Calculator from './Calculator';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <Header
        className="app-container__header"
        size='huge'
        dividing
      >
        Expense Calculator 5000™️
      </Header>
      <Message
        info
        size='large'
        header="Welcome to the Expense Calculator 5000™️!"
        content="Please input a few personal details below to calculate how much your benefits will cost you and your family during the next fiscal year."
      />
      <Calculator />
    </div>
  );
}

export default App;
