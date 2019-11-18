import React, { Component } from 'react';

export default class ColorBox extends Component {

//   render() {
//     const newValue = this.props.opacity - 0.1
//     return this.props.opacity >= 0.2? (<div> <ColorBox opacity={newValue} /> </div>) : null
//   }
// }
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
}


