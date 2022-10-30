import React, { Component } from 'react';
import '../index.css'

class ToolTip extends Component {

  render() {
    const {hoverLoc, activePoint} = this.props;
    const svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();

    let placementStyles = {};
    let width = 105;
    placementStyles.width = width + 'px';
    placementStyles.left = hoverLoc + svgLocation.left - (width/2);

    return (
      <div className='hover' style={ placementStyles }>
        <div className='date'>{ activePoint.d } </div>
        <div className='price'> US$ {activePoint.prediction.toFixed(2)} </div>
      </div>
    )
  }
}

export default ToolTip;