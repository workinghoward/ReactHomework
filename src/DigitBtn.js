import React from 'react';
import PropTypes from 'prop-types';

const divStyle = {
  width: '90px',
  margin: '5px',
};
export default function DigitBtn({ value, onClickBtn }) {
  return (
    <input type="button" value={value} style={divStyle} onClick={() => onClickBtn(value)} />
  );
}

DigitBtn.propTypes = {
  value: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
