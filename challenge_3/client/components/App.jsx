import React from 'react';
import Title from './Title';
import PinSelector from './PinSelector';
import CurrentScore from './CurrentScore';
import PreviousGames from './PreviousGames';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
    };
  }

  render() {
    return (
      <div>
        <Title user={this.state.user} />
        <PinSelector />
        <CurrentScore />
        <PreviousGames />
      </div>
    )
  }
}