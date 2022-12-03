import React from 'react';

import './App.scss';
import DrumMachine from './components/drum-machine';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row vh-100">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="bg-light card shadow">
              <div className="card-header">
                <h1 className="display-5 text-center mb-3">Drum Machine</h1>
              </div>
              <div className="card-body">
                <DrumMachine />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
