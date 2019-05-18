import React from 'react';


class ArrowsBtn extends React.Component {

    render() {
        return (
            <div className="arrows">
                <button className="waves-effect btn waves-light left"><i className="fas fa-caret-left"> </i></button>
                <button className="waves-effect btn waves-light top"><i className="fas fa-caret-up"> </i></button>
                <button className="waves-effect btn waves-light right"><i className="fas fa-caret-right"> </i></button>
                <button className="waves-effect btn waves-light bottom"><i className="fas fa-caret-down"> </i></button>
                <button className="waves-effect btn waves-light rotate-btn"><i className="fas fa-undo-alt"> </i></button>
            </div>
        )
    }
}

export default ArrowsBtn