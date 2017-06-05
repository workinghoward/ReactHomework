import React, { Component } from 'react';

const divStyle = {
  width: '50px',
  margin:'5px',
};

 var button1 = 0;
 var button2 = 0;
 var button3 = 0;
class CalculateCom extends Component {   
    test = 0;
    changebutton1Value(event)
    {
        alert(event.target.value);
        test= event.target.value;
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
        return (
            <div>
                <div>
                    <input type="text" style={divStyle} onChange={this.changebutton1Value}/>
                    <input type="button" value="+" style={divStyle} />
                    <input type="text" style={divStyle} />
                    <input type="button" value="-" style={divStyle} />
                    <input type="text" style={divStyle} />
                </div>
            </div>           
        )
    }
}

module.exports = CalculateCom;