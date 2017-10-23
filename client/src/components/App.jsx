import React from 'react';
import ReactDOM from 'react-dom';

import Clock from 'react-live-clock';

import AlarmIndicator from './AlarmIndicator';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <Clock className="time" format={'h:mm A'} ticking={true} /> 
        <AlarmIndicator />
      </div>
    )
  }
}

export default App