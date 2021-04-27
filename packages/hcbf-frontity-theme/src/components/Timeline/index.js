import React from 'react';
import { connect, styled } from 'frontity';
import Container from "react-bootstrap/Container";
import Point from './Point.js';

const Timeline = ({ title, intro, years }) =>{
  return (
    <Container>
      <Title>{title}</Title>
      {intro.map((item, index) => {
          return <p>{intro[index].children[0].content}</p>
        })}

      <TimelineContainer>
        <Arrow />
        <TimelineContent>
          {years.map((item, index) => {
            let innerContainer = years[index].children[0].children;
            let year = innerContainer.shift();
            return <Point year={year.children[0].content} events={innerContainer} isRightSide={index % 2 == 0} />
          })}
          <Spacer />
        </TimelineContent>
      </TimelineContainer>
    </Container>
  );
};

export default connect(Timeline);

const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #8EC442;
`

const TimelineContainer = styled.div`
  position: relative;
`

const Arrow = styled.div`
  background: #1B75BB;
  height: auto;
  width: 7px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 40px;
  border-radius: 5px;

  &:before,
  &:after {
    content: "";
    background: #1B75BB;
    position: absolute;
    width: 7px;
    height: 52px;
    border-radius: 5px;
  }

  &:before {
    bottom: -10px;
    left:-16px;
    transform: rotate(-45deg);
  }

  &:after {
    bottom: -10px;
    right: -16px;
    transform: rotate(45deg);
  }
`

const TimelineContent = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

const Spacer = styled.div`
  height: 150px;
`
