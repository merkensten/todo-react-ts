import React from 'react';
import { Routing } from './routes/Routing';
import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
