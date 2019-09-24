import React from 'react';

class ModalBtn extends React.Component {
  render() {
    return (
      <div>
        <button id="show-ipt_name">show input name</button>
        <button id="show-gm_over"> show game over</button>
        {/*game over modal */}
        <div className="end" id="modal-win">
          <h1> Game Over.</h1>
          <p>Continue?</p>
          <button className="waves-effect btn waves-light">GO!!!</button>
        </div>
        {/*scores table*/}
        <div id="modal-input-name">
          <div className="wrap-input-name row">
            {/*scores self*/}
            <div className="col s4 offset-s4">
              <div className="border">
                <ul>
                  <li>john<span>200<b>scores!</b></span></li>
                </ul>
              </div>
            </div>
            {/*table of winners*/}
            <div className="input-field col s4 offset-s4">
              <i className="material-icons prefix">account_circle</i>
              <input className="validate" id="icon_prefix" type="text"></input>
              <label htmlFor="icon_prefix">Enter you name:</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBtn;
