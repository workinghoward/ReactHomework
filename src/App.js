import React, { Component } from 'react';
import CalculateCom from './CalculateCom';
import ResultCom from './ResultCom';

class App extends Component {
    render() {
        return (
            <div>
                Hello, World.
                <CalculateCom />
                <ResultCom />
            </div>
        )
    }
}

module.exports = App;