import React from 'react';
import Title from './Title';
import PinSelector from './PinSelector';
import Display from './Display';
// import CurrentScore from './CurrentScore';
// import PreviousGames from './PreviousGames';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      currentPins: [[0], [1,1], [1,1,1], [1,1,1,1]]
    };
  }

  handleSelect(e) {
    const pins = e.target.key;

  }

  render() {
    return (
      <div>
        <Title user={this.state.user} />
        <div id='pinsDisplay'>
          <Display pins={this.state.currentPins} />
          <PinSelector handleSelect={this.handleSelect} />
        </div>
      </div>
    )
  }
}

export default App;
