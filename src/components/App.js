import React from 'react';
import Header from './Header';
import CoffeeControl from './CoffeeControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row-center">
          <Header />
        </div>
        <div className="row-center">
          <CoffeeControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;