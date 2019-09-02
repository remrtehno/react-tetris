import React from 'react';
import {setCapture} from "../reserve/reserve";
import ArrowsBtn from "../ArrowsBtn/Arrows";
import allFigures from "../figures/figures";



function generateNextFigure() {
  const index = Math.floor(Math.random() * allFigures.length);
  return allFigures[index].map(x=>x.map(x=>x));
}

class ManipulateFigure extends React.Component {
  state = { tick: null, currentFigure: null, nextFigure: null, }

  tick = () => {
      this.setState(() => {
        if(this.state.tick === null) {
          return {
            tick: this.state.tick = 0,
            currentFigure: generateNextFigure()
          };
        };
        if(this.state.tick === 3) {
          return {
            tick: this.state.tick = 0,
            currentFigure: generateNextFigure()
          };
        };
        return {
          tick: this.state.tick + 1,
        };
      });
    };

    componentDidMount () {
      setInterval(this.tick , 1000);
    };
    componentWillUnmount () {
      clearInterval(this.tick);
    };


  fallFigure = (arr) => {
    if(arr) {
      return arr.map(v => v[1]++);
    };
  };

  render() {
    this.props.figure(this.state.currentFigure);
    console.log(this)
    const move = (e) => {
      // currentFigure.map(v => {
      //   return e == 39 ? v[0]++ : e == 37 ? v[0]-- : v;
      // })
      // if(e === 39) {
      //   currentFigure.map(v => v[1]++);
      //   setCapture(currentFigure)
      //   this.forceUpdate()
      // }
    };
    // if(this.state.tick != 0) {
    //   this.fallFigure(currentFigure);
    // };
    //
    // if (this.state.tick == 3) {
    //   setCapture(currentFigure)
    // };

    return(
      <div/>
    )
  }
}

export default ManipulateFigure