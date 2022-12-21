import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState,  } from 'react';
import consumer from './cable'

const App = props => {
  const [oauthPayload, setoauthPayload] = useState({})
  
  useEffect(() => {
    console.log('component is mount');

    consumer.subscriptions.create
    (
      {
        channel: 'AuthenticationChannel',
        uuid: '666',
      },
      {
        received: (newOauthPayload) => {
          console.log('setoauthPayload');
          setoauthPayload(newOauthPayload)
          console.log(oauthPayload);
        }
      }
    )
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
