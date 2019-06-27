import React, {useState} from 'react';
import './App.css';
import ArrowsBtn from './ArrowsBtn/Arrows';
import LevelSelect from './LevelSelect/LevelSelect';
import ModalBtn from "./ModalsBtn/ModalsBtn";
import {Grid} from './Grid';
import allFigures from "./figures/figures";

function generateNextFigure() {
  const index = Math.floor(Math.random() * allFigures.length);
  return allFigures[index];
}

class App extends React.Component {

  state = { nextFigure: null }

  tick = () => {
    this.setState(() => {
      return {nextFigure: generateNextFigure()};
    });
  }

  componentDidMount () {
    setInterval(this.tick , 1000);
  }

  componentWillUnmount () {
    clearInterval(this.tick);
  }

  render () {
    let {nextFigure} = this.state;
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s3 main-screen">
              <div className="counter">
                <div className="event-counter" id="js-event-counter">0</div>
                <div className="score" id="js-score">0</div>
                <div className="level" id="js-level">0</div>
              </div>
              <Grid
                height={20}
                width={10}
                figure={null}
                className="grid"
              />
              <Grid
                height={5}
                width={5}
                figure={nextFigure}
                className="preview-cells"
              />
              <ArrowsBtn/>
              <LevelSelect/>
            </div>
          </div>
        </div>
        <ModalBtn/>
      </main>
    );
  }
}

export default App;
