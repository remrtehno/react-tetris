import React from 'react';
import ReactDOM from "react-dom";
import RenderCells from '../components/renderCells/renderCells'
import allFigures from '../components/figures/figures'


function Engine(param) {
        let lifeTime = -1

        //random select from array of figures
        param = {}
        let figureID = [Math.floor(Math.random() * Math.floor(allFigures.length))]
        param.figure = allFigures[figureID][0] //first figure
        param.figureID = figureID


        //change position in real time, without life time
        let dragFigures = [];

        //clock generator
        setInterval(() => {
            lifeTime++

            //send command for rendering
            ReactDOM.render(<RenderCells limit="200" position={param} fastPosition={dragFigures} lifeTime={lifeTime}/>, document.getElementById("grid"))

        }, 1000);

        return null



}







export default Engine;