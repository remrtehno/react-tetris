import React from 'react';


class LevelSelect extends React.Component {


    render() {

        return(
            <div className="controls-btn">
                <button className="waves-effect btn waves-light">Pause</button>
                <button className="waves-effect btn waves-light">Reset</button>
                <ul className="dropdown-content levels" id="dropdown2">
                    <li> <button>Easy</button> </li>
                    <li> <button>Medium</button> </li>
                    <li> <button>Hard</button> </li>
                </ul>
                <button className="btn dropdown-trigger" data-target="dropdown2"> Level <i className="material-icons right"> </i>
                </button>
            </div>
        )
    }

}


export default LevelSelect




