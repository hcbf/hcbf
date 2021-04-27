import React, { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import useInView from "@frontity/hooks/use-in-view";

const Animation = ({ maxValue, interval, inView }) => {

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = maxValue;

      if (start >= end) return;

      if (/\./.test(maxValue)) {
        let count = setInterval(() => {
          start += 0.1;
          setCurrentValue(String(start.toFixed(1)));
          if (start >= end) clearInterval(count)
        }, interval);

      } else {
        let count = setInterval(() => {
          start += 1;
          setCurrentValue(String(start));
          if (start >= end) clearInterval(count)
        }, interval);
      }
    }
  }, [maxValue, interval, inView]);

  return (
    <Number key={'funding-'+ maxValue}>{currentValue}</Number>
  )
}

export default connect(Animation);

const Number = styled.h1`
  display: inline-block;
  color: #1B75BB;
  font-size: 40px;
  margin: 0;
  padding: 0;
`
