import React, { useState } from "react";
import { styled, css } from "frontity";
import Container from "react-bootstrap/Container";
import Slide from "./Slide";

const Carousel = ({ title, galleryItems }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Display fluid="xl" >
      <Title>{title}</Title>
      <Slide
        image={ galleryItems[currentIndex].children[0].children[0] }
        caption={ galleryItems[currentIndex].children[0].children[1].children[0].content }
        />

      <Nav>
        {galleryItems.map((item, index) => (
          <Dot
            onClick={ () => {
              setCurrentIndex(index);
            }}
            css={
              () => {
                if (currentIndex === index) {
                  return css`background: #8EC442`
                }
              }
            }
            />
        ))}
      </Nav>
    </Display>
  );
}

export default Carousel;

const Display = styled(Container)`
  position: relative;
  margin-left: -15px;
  width: 1140px;
  padding: 0;

  @media (max-width: 1140px) {
    display: none;
  }
`

const Title = styled.h2`
  display: block;
  position: absolute;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 360px;
  bottom: 400px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90px;

  button:last-child {
    margin-right: 0;
  }
`

const Dot = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  margin-right: 15px;
  border: none;
  outline: none;
`
