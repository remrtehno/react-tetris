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

  state = { tick: 0, currentFigure: null, nextFigure: null }

  tick = () => {
    this.setState(() => {
      if(this.state.tick === 0) {
        return {
          tick: this.state.tick + 1,
          nextFigure: generateNextFigure(),
          currentFigure:generateNextFigure()
        };
      }
      return {
        tick: this.state.tick + 1,
      };
    });
    if(this.state.currentFigure) {

    }
  }

  componentDidMount () {
    setInterval(this.tick , 1000);

  }

  componentWillUnmount () {
    clearInterval(this.tick);
  }

  fallFigure = (arr) => {
    if(!arr) { arr = [] }

    //arr.map(v => v[1]++);

    if(this.state.tick === 3) {
      this.setState(() => {
        return {
          tick: 0,
        }
      })
    }

  };

  render () {
    let {nextFigure, currentFigure} = this.state;
    this.fallFigure(currentFigure);

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
                figure={currentFigure}
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
