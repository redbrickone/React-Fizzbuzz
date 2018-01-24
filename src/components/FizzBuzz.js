import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Styles (Styled Components)
 * https://www.styled-components.com/ 💅
 */
const Wrapper = styled.div`
  background-color: #e1e2e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009688;
  color: #e0f2f1;
  height: 70px;
  width: 100%;
`;

export default function FizzBuzz(props) {
  return (
    <Wrapper>
      <Header>
        <h1>React FizzBuzz</h1>
      </Header>
      <div>{'Replace me with a counter 🔢'}</div>
      <div>{' There seems to be a PlusMinusButton component 🤔 🤨'}</div>
    </Wrapper>
  );
}

/**
 * PropTypes help document your component by stating what props
 * this component expects from it's parent component.
 */
FizzBuzz.propTypes = {
  count: PropTypes.number.isRequired,
  fizzBuzz: PropTypes.string.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
};
