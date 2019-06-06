import React from 'react';
import {reserved as reserve} from '../reserve/reserve'
import {positionReserve,fastStack} from '../reserve/reserve'
import allFigures from "../figures/figures"





class RenderCells extends React.Component {


    //falling mechanism
    fallingMechanism = () => {
        let cells = []
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





    render() {
        let figure = this.props.position.figure
        let rotateFigure = 0;
        let figureArray = allFigures[this.props.position.figureID]
        

        let cells = []

        if(this.props.lifeTime === 0) {
            /*
                let lifeTime is the course of the game
                let cells is output array for render cells
                reserve.figuresReserved is object with cached figures for prevent a double receive a figure
             */

            //init figure / position y=0 x=0
            for (let i = 0; i < this.props.limit; i++) {
                if(figure) {
                    if(figure.includes(i)) {
                        cells.push(<div className="cell black" key={i}></div>)
                    } else {
                        cells.push(<div className="cell" key={i}></div>)
                    }
                }
            }

            //reserved a position initial
            Object.assign(positionReserve, figure)

        } else {


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

        window.tst = () => {
            //drive to right mechanism
            if(positionReserve.find(v => /[9]$/g.test(v)) === undefined) {
                Object.assign(positionReserve, positionReserve.map(v => (v + 1)))

                //save position on X coordiante
                if(fastStack.hasOwnProperty('coordinateX')) {
                    fastStack.coordinateX++
                } else {
                    fastStack.coordinateX = rotateFigure
                    fastStack.coordinateX++
                }


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
                // Force a render with a simulated state change
                this.setState({ state: this.state });
                console.log(positionReverseArr)
            }

        }

        window.rt = () => {
            //change figure mechanism


            // increment to rotate position
            if(fastStack.hasOwnProperty('rotateNumber')) {
                fastStack.rotateNumber++
            } else {
                fastStack.rotateNumber = rotateFigure
                fastStack.rotateNumber++
            }

            //limit to rotate figure
            if((Object.keys(figureArray).length-1) < fastStack.rotateNumber) {
                fastStack.rotateNumber = rotateFigure
            }


            //#######
            //save position on X coordiante



            //transfer to render
            Object.assign(positionReserve, figureArray[fastStack.rotateNumber])

            this.fallingMechanism()

            // Force a render with a simulated state change
            this.setState({ state: this.state });



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