import React, { Component } from 'react';
import CalculateCom from './CalculateCom';

const spanStyle = {
  width: '50px',
  margin:'5px',
};

var result = 0;

class ResultCom extends Component {

  calculateResult()
  {
      result = 1;

  }

    render() {
        return (
            <div>
                <input type="button" value="=" onClick={this.calculateResult}/>
                <div><span style={spanStyle} >{result}</span></div>
            </div>           
        )
    }
}

module.exports = ResultCom;