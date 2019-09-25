import React from 'react';

class ArrowsBtn extends React.Component {

  componentWillMount() {
    document.onkeydown = e => {
      this.props.appUpdate(e.key);
    }
  };
  rotate = () => {
    this.props.appUpdate('Rotate');
  };

  render() {
    return (
      <div className="arrows">
        <button className="waves-effect btn waves-light rotate-btn" onClick={this.rotate}><i
          className="fas fa-undo-alt"> </i></button>
      </div>
    )
  }
}

export default ArrowsBtn
