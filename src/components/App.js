import React from 'react';

import './App.css';
//import RenderCells from './renderCells/renderCells';
import ArrowsBtn from './ArrowsBtn/Arrows';
import LevelSelect from './LevelSelect/LevelSelect';
import ModalBtn from "./ModalsBtn/ModalsBtn";









function App() {


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


                        <div className="grid" id="grid" data-component="grid">
                            {/*<RenderCells limit="200"/>*/}
                        </div>



                        <div className="preview-cells" id="js-next-piece">
                            {/*<RenderCells limit="25"/>*/}
                        </div>

                        <ArrowsBtn />

                        <LevelSelect />

                    </div>
                </div>
            </div>

            <ModalBtn />

        </main>

    );
}



export default App;
