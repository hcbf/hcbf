import React from "react";
import { styled, css } from "frontity";
import Container from "react-bootstrap/Container";

const FullImage = ({ img }) => {
  const props = img.children[0].props;

  let renderSwitch = (title) => {
    switch (title) {
      case ('mobile-landing'):
        return (
          css`display: none;
            width: 100%;
            height: auto;

            @media (max-width: 400px) {
              display: block;
            }`
        )
        break;

      case ('desktop-landing'):
        return(
          css`display: block;
            width: 100%;
            height: auto;

            @media (max-width: 400px) {
              display: none;
            }`
        )
        break;
    }
  }

  return (
    <ImageContainer fluid css={renderSwitch(props.title)}>
      <img sizes={props.sizes} className={props.className} src={props.src} srcSet={props.srcSet} alt={props.alt} />
    </ImageContainer>
  )
}

export default FullImage;

const ImageContainer = styled(Container)`
  margin: 0;
  padding: 0;
`
