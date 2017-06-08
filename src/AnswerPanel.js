import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  text-align: right;
  border-bottom: 1px solid
`;
export default function AnswerPanel({ realResult, inputValue, status }) {
  return (
    <Container>
      <div style={{ fontSize: '15px' }}>{realResult}</div>
      <div style={{ fontSize: '30px' }}>{status}{inputValue}</div>
    </Container>
  );
}

AnswerPanel.propTypes = {
  inputValue: PropTypes.number.isRequired,
  realResult: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
