import React from 'react';
import Title from './Title';
import PinSelector from './PinSelector';
import Display from './Display';
import CurrentScore from './CurrentScore';
// import PreviousGames from './PreviousGames';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      currentPins: [[1], [1,1], [1,1,1], [1,1,1,1]],
      pinCount: 10,
      scoreCard: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']],
      total: 0,
      ball: 0,
      frame: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const pins = Number(e.target.innerText);
    if (this.state.ball === 0) {
      if (pins === 10) {
        const newScore = [];
        this.state.scoreCard.forEach(frame => {
          newScore.push(frame.slice());
        });
        newScore[this.state.frame][0] = pins;
        newScore[this.state.frame][2] = pins;
        const newFrame = this.state.frame + 1;
        this.setState({
          frame: newFrame,
          scoreCard: newScore,
        });
      } else {
        const newScore = [];
        this.state.scoreCard.forEach(frame => {
          newScore.push(frame.slice());
        });
        newScore[this.state.frame][0] = pins;
        newScore[this.state.frame][2] = pins;
        this.setState({
          ball: 1,
          scoreCard: newScore,
        });
      }
    } else {
      const newScore = [];
      this.state.scoreCard.forEach(frame => {
        newScore.push(frame.slice());
      });
      newScore[this.state.frame][1] = pins;
      newScore[this.state.frame][2] += pins;
      const newFrame = this.state.frame + 1;
      this.setState({
        ball: 0,
        frame: newFrame,
        scoreCard: newScore,
      });
    }
  }

  render() {
    return (
      <div>
        <Title user={this.state.user} />
        <div id='pinsDisplay'>
        {/* <Display pins={this.state.currentPins} /> */}
          <PinSelector pinCount={this.state.pinCount} handleSelect={this.handleSelect} />
        </div>
        <CurrentScore scoreCard={this.state.scoreCard} user={this.state.user} total={this.state.total} />
      </div>
    )
  }
}

export default App;
