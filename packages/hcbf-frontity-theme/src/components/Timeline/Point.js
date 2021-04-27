import React from 'react';
import { connect, styled, css } from 'frontity';
import Event from './Event.js';

const Point = ({ year, events, isRightSide }) => {
  return (
    <PointContainer css={ isRightSide ?
        css`margin-left: calc(50% + 50px);`
        : css`margin-left: calc(50% - (${400 / 1440} * 100vw) - 50px);` }>
      <Dot />
      <Year css={ isRightSide ? null : css`margin-left: calc(100% - 50px)` }>{year}</Year>
      {events.map((item, index) => {
        return <Event event={events[index].children[0].content}/>
      })}
    </PointContainer>
  );
};

export default connect(Point);

const PointContainer = styled.div`
  max-width: 400px;
  margin-top: 30px;
  width: calc(${400 / 1440} * 100vw);
  overflow-wrap: break-word;
`

const Dot = styled.div`
  position: absolute;
  background-color: #1B75BB;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: calc(50% - (25px * .5) + (7px / 2))
`

const Year = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #8EC442;
`
