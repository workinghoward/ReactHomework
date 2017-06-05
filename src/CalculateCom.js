import React, { Component } from 'react';

const divStyle = {
  width: '50px',
  margin:'5px',
};

 var button1 = 0;
 var button2 = 0;
 var button3 = 0;
class CalculateCom extends Component {   

    constructor(props) {
        super(props);

        this.state = {
            post: this.props.data,
            bu1: '5'
        };
    }
    changebutton1Value(event)
    {
        return this.setState({bu1: this.state.bu1});
    }

    changebutton2Value(event)
    {
        alert(event.target.value);
        button2= event.target.value;
    }

    changebutton3Value(event)
    {
        alert(event.target.value);
        button3= event.target.value;
    }

    render() {
        var tx = this.state.bu1;
        return (
            <div>
                <div>
                    <input type="text" style={divStyle} onChange={this.changebutton1Value.bind(this)}/>
                    <input type="button" value="+" style={divStyle} />
                    <input type="text"  value={tx} style={divStyle} />
                    <input type="button" value="-" style={divStyle} />
                    <input type="text" style={divStyle} />
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;