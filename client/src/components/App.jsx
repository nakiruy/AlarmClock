import React from 'react';
import ReactDOM from 'react-dom';

import Clock from 'react-live-clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Clock format={'h:mm'}/>
      </div>
    )
  }
}

export default App