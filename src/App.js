import React, { Component } from 'react';
import styled from 'styled-components';
import DigitBtn from './DigitBtn';
import AnswerPanel from './AnswerPanel';

const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  border: 1px black solid;
`;
const Digit = styled.div`
  width: 300px;
  display: inline-block;
`;
const Operator = styled.div`
  width: 100px;
  display: inline-block;
`;
class App extends Component {
  state = {
    realResult: 0,
    inputValue: 0,
    status: '',
    caclHistory: [],
    isInput: true,
  }
  onClickDigit = (val) => {
    const { inputValue, isInput } = this.state;
    if (isInput) {
      return this.setState({
        inputValue: parseInt(inputValue.toString().concat(val), 10),
        isInput: true,
      });
    }
    return this.setState({ inputValue: parseInt(val, 10), isInput: true });
  }
  onClickCalculate = (opt) => {
    const { realResult, inputValue, status, isInput } = this.state;
    const caclHistory = this.state.caclHistory.slice();
    switch (status) {
      case '':
        caclHistory.push(`${inputValue}`);
        this.setState({ realResult: inputValue, status: opt, isInput: false, caclHistory });
        break;
      case '+':
        if (!isInput) this.setState({ status: opt });
        else {
          caclHistory.push(`${inputValue}`);
          this.setState({
            realResult: inputValue + realResult,
            isInput: false,
            inputValue: 0,
            status: opt,
            caclHistory,
          });
        }
        break;
      case '-':
        if (!isInput) this.setState({ status: opt });
        else {
          caclHistory.push(`-${inputValue}`);
          this.setState({
            realResult: realResult - inputValue,
            isInput: false,
            inputValue: 0,
            status: opt,
            caclHistory,
          });
        }
        break;
      default:
        break;
    }
  }
  onClickDelete = () => this.setState({ inputValue: 0, realResult: 0, status: '', isInput: true })

  onRecover = (item, idx) => {
    const { realResult, caclHistory } = this.state;
    caclHistory.splice(idx, 1);
    this.setState({ realResult: realResult - parseInt(item, 10), caclHistory });
  }
  render() {
    const { inputValue, realResult, caclHistory, status } = this.state;

    return (
      <Container>
        <AnswerPanel inputValue={inputValue} realResult={realResult} status={status} />
        <Digit>
          <DigitBtn value="1" onClickBtn={this.onClickDigit} />
          <DigitBtn value="2" onClickBtn={this.onClickDigit} />
          <DigitBtn value="3" onClickBtn={this.onClickDigit} />
          <DigitBtn value="4" onClickBtn={this.onClickDigit} />
          <DigitBtn value="5" onClickBtn={this.onClickDigit} />
          <DigitBtn value="6" onClickBtn={this.onClickDigit} />
          <DigitBtn value="7" onClickBtn={this.onClickDigit} />
          <DigitBtn value="8" onClickBtn={this.onClickDigit} />
          <DigitBtn value="9" onClickBtn={this.onClickDigit} />
        </Digit>
        <Operator>
          <DigitBtn value="+" onClickBtn={this.onClickCalculate} />
          <DigitBtn value="-" onClickBtn={this.onClickCalculate} />
          <DigitBtn value="AC" onClickBtn={this.onClickDelete} />
        </Operator>
        <div>{ caclHistory.map((k, i) => <input key={i.toString()} type="button" value={k} onClick={() => this.onRecover(k, i)} />) } </div>
      </Container>
    );
  }
}

module.exports = App;
