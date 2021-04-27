import React from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import useInView from "@frontity/hooks/use-in-view";
import Animation from './Animation'

const ColumnLayout = ({ number, extractedNumber, field }) => {
  const isMoney = /\$/.test(number);
  const hasScale = (isNaN(number[number.length - 1]));
  const interval = /\./.test(extractedNumber) ? 750/(extractedNumber.join('') * 10) : 50/extractedNumber;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  switch(isMoney + '|' + hasScale) {
    case "true|true":{
      return (
        <Circle ref={ref} css={inView ? css`animation: ${border} 1s ease-in forwards;` : null}>
          <Money>$</Money>
          <Animation maxValue={extractedNumber.join('')} interval={interval} inView={inView}/>
          <Scale>{number[number.length - 1]}</Scale>
          <Field>{field}</Field>
        </Circle>
      );
    }

    case "true|false":{
      return (
        <Circle ref={ref} css={inView ? css`animation: ${border} 1s ease-in forwards;` : null}>
          <Money>$</Money>
          <Animation maxValue={extractedNumber} interval={interval} inView={inView} />
          <Field>{field}</Field>
        </Circle>
      );
    }
    default:{
      return (
        <Circle ref={ref} css={inView ? css`animation: ${border} 1s ease-in forwards;` : null}>
          <Animation maxValue={extractedNumber} interval={interval} inView={inView} />
          <Field>{field}</Field>
        </Circle>
      );
    }
  }
}

export default connect(ColumnLayout);

const border = keyframes`
  from {
    border-color: transparent;
  } to {
    border-color:  #8EC442;
  }
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  margin: auto;
  border: 7px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 125px;
    height: 125px;;
  }

  :hover {
    animation: ${border} .75s ease-in forwards;
  }
`

const Money = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 54px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #1B75BB;
`

const Scale = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #1B75BB;
`

const Field = styled.h2`
  position: absolute;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #1B75BB;
  background: #FFFFFF;
  margin: 0;
  padding: 0 20px;
  bottom: 0;

  @media (max-width: 570px) {
    font-size: 20px;
  }
`
