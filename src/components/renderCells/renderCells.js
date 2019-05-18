import React from 'react';

class RenderCells extends React.Component {

    //for rerender

    constructor(props){
        super();

        window.rerender = rerender => {

            //document.querySelector('#container-cells').innerHTML = "";
            this.forceUpdate();
        }

    }


    render() {

        const cells = []
        for (let i = 0; i < this.props.limit; i++) {
            cells.push(<div className="cell" key={i}></div>)
        }

        console.log(cells)

        return(

            <div id="container-cells">{cells}</div>

        )
    }
}



export default RenderCells;