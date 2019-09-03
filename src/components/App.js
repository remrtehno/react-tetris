import React, {useState} from 'react';
import './App.css';
import ArrowsBtn from './ArrowsBtn/Arrows';
import LevelSelect from './LevelSelect/LevelSelect';
import ModalBtn from "./ModalsBtn/ModalsBtn";
import {Grid} from './Grid';
import allFigures from "./figures/figures";
import {setCapture, stack} from "./reserve/reserve";

function generateNextFigure() {
  const index = Math.floor(Math.random() * allFigures.length);
  return allFigures[index].map(x=>x.map(x=>x));
}

class App extends React.Component {

  state = { tick: null, currentFigure: null, nextFigure: null, externalSignal: null,}

  tick = () => {
    this.setState(() => {
      if(this.state.tick === null) {
        return {
          tick: this.state.tick = 0,
          currentFigure: generateNextFigure(),
          externalSignal: null,
        };
      };
      return {
        tick: this.state.tick + 1,
        externalSignal: null,
      };
    });
  };

  componentDidMount () {
    setInterval(this.tick , 1000);
  };
  componentWillUnmount () {
    clearInterval(this.tick);
  };

  stopAndResetFigure = (externalSignal = null) => {
    setCapture(this.state.currentFigure);
    this.setState(()=>{
      return {
        tick: 0,
        currentFigure: generateNextFigure(),
        externalSignal: externalSignal,
      };
    });
  };

  fallFigure = (arr, e = 40) => { //40 arrow down - default behavior
    if(arr) {
      let clone = arr => Array.from(arr,item => Array.isArray(item) ? clone(item) : item);
      let out = clone(arr);
      out.map(v => e === 39 ? v[0]++ : e === 37 ? v[0]-- : e === 40 ? v[1]++ : v);
      //##### !!!!
      if( !out.some(x=>x[0] >=10 || x[0] < 0) && !this.compareArrays(out, stack) || e === 40) { // prevent left/right side out
        if (!this.compareArrays(out, stack) && !out.some(x => x.some(x => x >= 20)) /* prevent out of area */) {
          arr.map(v => e === 39 ? v[0]++ : e === 37 ? v[0]-- : e === 40 ? v[1]++ : v);
        } else {
          this.stopAndResetFigure()
        }
      }
    }
  };

  compareArrays = (val,compVal) => {
    if(val.length !== 0 && compVal.length !== 0) {
      for( const x of compVal.values() ) {
        for( const v of val.values() ) {
          if(JSON.stringify(x) === JSON.stringify(v) ) {
            return true;
            break;
          }
        }
      }
    }
    return false;
  };

  render () {
    let {nextFigure, currentFigure} = this.state;
    let figureOut = null;

    if(this.state.tick !== 0 && !this.state.externalSignal) {
      this.fallFigure(currentFigure);
    }

    const move = (e) => {
      if(currentFigure) {
        this.fallFigure(currentFigure, e, true);
        this.setState(() => { return { externalSignal: true, } })
      }
    };

    if(currentFigure) {
      figureOut = [...currentFigure, ...stack]
    }

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
                figure={figureOut}
                className="grid"
              />
              <Grid
                height={5}
                width={5}
                figure={nextFigure}
                className="preview-cells"
              />
              <ArrowsBtn appUpdate={e => move(e)}/>
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


// 1) slice
// 2) contact
// 3)map
// 4) filter
// 5)spread
// 6)object.assign
// 7) array from