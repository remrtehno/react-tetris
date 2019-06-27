import React from 'react';
import {positionReserve,fastStack, capture} from '../reserve/reserve'
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

        // Force a render with a simulated state change
        this.setState({ state: this.state });
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


            console.log(this.props.lifeTime)

            //limit on bottom
            if(positionReverseArr.some(v => v > 200)) {

                //make captuire
                Object.assign(capture, positionReverseArr)

                debugger

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


                //transfer to render
                this.fallingMechanism()
            }

        }

        window.rt = () => {

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

            //prevent to get out through border
            if(fastStack.coordinateX) {
                let currLengthFigure = figureArray[fastStack.rotateNumber]
                currLengthFigure = currLengthFigure.map(v=>  parseInt(v.toString().match(/\d$/g)[0]))
                currLengthFigure = Math.max.apply(null, currLengthFigure)

                /*
                    clip all after border right
                    formula:

                    fastStack.coordinateX - current position
                    if(fastStack.coordinateX + currLengthFigure > 9) - checks if figure border out
                    9 - (fastStack.coordinateX + currLengthFigure) - checks how much figure will border out
                    fastStack.coordinateX = fastStack.coordinateX - superfluous  - and clip that value

                */
                if(fastStack.coordinateX + currLengthFigure > 9) {
                    let superfluous = 9 - (fastStack.coordinateX + currLengthFigure)
                    superfluous = Math.abs(superfluous)
                    //clip
                    fastStack.coordinateX = fastStack.coordinateX - superfluous

                }



            }


            //assign rotate
            Object.assign(positionReserve, figureArray[fastStack.rotateNumber])

            //read position on X coordiante
            if(fastStack.hasOwnProperty('coordinateX')) {
                Object.assign(positionReserve, positionReserve.map(v => (v + fastStack.coordinateX)))
            }

            //transfer to render
            this.fallingMechanism()

        }





        return(

            <div id="container-cells">{cells}</div>

        )
    }
}



export default RenderCells;


