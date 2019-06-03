import React from 'react';
import {reserved as reserve} from '../reserve/reserve'
import {positionReserve} from '../reserve/reserve'


class RenderCells extends React.Component {





    render() {
             

        

        let cells = []

        if(this.props.lifeTime === 0) {
            /*
                let lifeTime is the course of the game
                let cells is output array for render cells
                reserve.figuresReserved is object with cached figures for prevent a double receive a figure
             */

            //init figure / position y=0 x=0
            for (let i = 0; i < this.props.limit; i++) {
                if(this.props.position) {
                    if(this.props.position.includes(i)) {
                        cells.push(<div className="cell black" key={i}></div>)
                    } else {
                        cells.push(<div className="cell" key={i}></div>)
                    }
                }
            }

            //reserved a position initial
            Object.assign(positionReserve, this.props.position)

        } else {

            /*
                falling down figure
                formula: positionReserve + (lifetime*10) = result(let positionReverseArr)

                lifetime = 1 [10,20,30].map + (1*10) = 20,30,40 (result in positionReverseArr)
                lifetime = 2 [10,20,30].map + (2*10) = 30,40,50 (result in positionReverseArr)

             */

            // let positionReverseArr = positionReserve.map(v => (v + (this.props.lifeTime * 10)))
            //
            // for (let i = 0; i < this.props.limit; i++) {
            //     if(positionReverseArr) {
            //         if(positionReverseArr.includes(i)) {
            //             cells.push(<div className="cell black" key={i}></div>)
            //         } else {
            //             cells.push(<div className="cell" key={i}></div>)
            //         }
            //     }
            // }




                    //drive to right mechanism
                    if(positionReserve.find(v => /[9]$/g.test(v)) === undefined) {
                        Object.assign(positionReserve, positionReserve.map(v => (v + 1)))
                    }







            //falling mechanism
            let positionReverseArr = positionReserve.map(v => {
                return (v + (this.props.lifeTime * 10))
            })

            for (let i = 0; i < this.props.limit; i++) {
                if(positionReverseArr) {
                    if(positionReverseArr.includes(i)) {
                        cells.push(<div className="cell black" key={i}></div>)
                    } else {
                        cells.push(<div className="cell" key={i}></div>)
                    }
                }
            }



        }







        return(

            <div id="container-cells">{cells}</div>

        )
    }
}



export default RenderCells;



//for rerender
// constructor(props){
//     super();
//
//     window.rerender = rerender => {
//
//         //document.querySelector('#container-cells').innerHTML = "";
//         this.forceUpdate();
//     }
//
// }
// componentDidMount() {
//     // setInterval(() => {
//     //     this.setState(() => {
//     //         console.log('setting state');
//     //         return { unseen: "does not display" }
//     //     });
//     // }, 1000);
// }
// if(this.props.position) {
//
//
//     cells.map((v,i) => {
//
//         if(this.props.position.includes(i)) {
//             console.log(i)
//             return null
//         } else {
//             return v
//         }
//
//     })
// }