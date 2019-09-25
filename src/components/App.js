import React from 'react';
import './App.css';
import ArrowsBtn from './ArrowsBtn/Arrows';
import LevelSelect from './LevelSelect/LevelSelect';
import ModalBtn from "./ModalsBtn/ModalsBtn";
import {Grid} from './Grid';
import allFigures from "./figures/figures";
import {SetCapture, stack} from "./reserve/reserve";
import _ from "lodash";


function generateNextFigure() {
  const index = Math.floor(Math.random() * allFigures.length);
  return allFigures[index].map(x=>x.map(x=>x));
}

class App extends React.Component {
  state = {
    tick: 0,
    currentFigure: generateNextFigure(),
    nextFigure: null,
    externalSignal: null,
    lifeTime: null,
  };

  tick = () => {
    this.setState(() => {
      return {
        tick: this.state.tick + 1,
        externalSignal: null,
      };
    });
  };

  componentDidMount () {
    this.setState(() => {
      return {
        lifeTime: setInterval(this.tick , 1000),
      }
    })
  };

  componentWillUnmount () {
    clearInterval(this.state.lifeTime);
  };

  stopAndResetFigure = (externalSignal = null) => {
    SetCapture(this.state.currentFigure);
    this.setState(() => {
      return {
        tick: 0,
        currentFigure: generateNextFigure(),
        externalSignal: externalSignal,
      };
    });
  };

  fallFigure = (arr, e = 'ArrowDown') => {
    if(arr) {
      let out = _.cloneDeep(arr);

      out.map(v => {
        switch (e) {
          case "ArrowDown": v[1]++;
            break;
          case "ArrowRight": v[0]++;
            break;
          case "ArrowLeft": v[0]--;
            break;
          default: v[1]++;
            break;
        }
      });

      // prevent left/right side out
      if( !out.some(x=>x[0] >=10 || x[0] < 0) && !this.identicalArrayInArray(out, stack) || e === 'ArrowDown') {
        /* prevent out of area */
        if (!this.identicalArrayInArray(out, stack) && !out.some(x => x.some(x => x >= 20)) ) {
          arr.map(v => {
            switch (e) {
              case "ArrowDown": v[1]++;
                break;
              case "ArrowRight": v[0]++;
                break;
              case "ArrowLeft": v[0]--;
                break;
              default: v[1]++;
                break;
            }
          });
        } else {
          this.stopAndResetFigure()
        }
      }
    }
  };

  identicalArrayInArray = (source,comparedArray) => {
    return source.some( x => {
      for (const v of comparedArray.values()) {
        if (_.isEqual(x, v)) {
          return true;
        }
      }
    });
  };


  move = (array, e) => {
    if(e) {
      this.fallFigure(array, e, true);
      this.setState(() => {
        return {
          externalSignal: true,
        }
      });
    }
  };

  render () {
    let {nextFigure, currentFigure} = this.state;

    if(this.state.tick !== 0 && !this.state.externalSignal) {
      this.fallFigure(currentFigure);
    }

    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s3 main-screen">
              <div className="counter">
                <div className="event-counter">0</div>
                <div className="score">0</div>
                <div className="level">0</div>
              </div>
              <Grid
                height={20}
                width={10}
                figure={[...currentFigure, ...stack]}
                className="grid"
              />
              <Grid
                height={5}
                width={5}
                figure={nextFigure}
                className="preview-cells"
              />
              <ArrowsBtn appUpdate={e => this.move(currentFigure, e)}/>
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
