import styled, { css } from 'styled-components';
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';

export const App = () => {

  const[counter, setCount] = useState(0)
  const INITIAL_VALUE = 0
  const handleIncrement = () => {
    setCount(counter+1)
  }

  const handleDecrement = () => {
    setCount(counter-1)
  }

  const handleChange = (isIncrement) => {
    setCount(isIncrement? counter + 1 : counter -1)
  }

  const resetCounter = () => {
    setCount(INITIAL_VALUE)
  }

  return <PageContainer>
    <div className="count">{counter}</div>
    <ButtonContainer>
      <EmojiButtonLeft onClick = {()=> handleChange(true)}>😃</EmojiButtonLeft>
      <EmojiButtonRight onClick = { () => handleChange(false)}>😝</EmojiButtonRight>
    </ButtonContainer>
    <div className = "reset" onClick={resetCounter}>Reset</div>
  </PageContainer>;
};


const PageContainer = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
`
const ButtonContainer = styled.div`
  margin: 30px;
`
const commonButtonStyle = css`
    padding: 30px;
    font-size: 50px;
    border: 1px solid black;
    background: white;
    cursor: pointer;
    :hover {
        background-color: gold;
    }
`

const Display = styled.div`
  font-size: 72px;
    font-weight: 700;
`
const EmojiButtonLeft = styled.button`
    ${commonButtonStyle};
    border-radius: 15px 0 0 15px;    
    border-right: none;
`
const EmojiButtonRight = styled.button`
    ${commonButtonStyle};
    border-radius: 0 15px 15px 0;
`


