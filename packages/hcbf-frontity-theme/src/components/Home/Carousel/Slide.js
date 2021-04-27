import React from 'react';
import { styled } from 'frontity';

const Slide = ({ image, caption }) => {
  return (
    <div>
      <Image loading="lazy" src={image.props.src} alt={image.props.alt} data-id={image.props['data-id']} data-full-url={image.props['data-full-url']} data-link={image.props['data-link']} className={image.props.className} srcSet={image.props.srcSet} sizes="(max-width: 1190px) 100%, 1190px" />
      <Caption>{caption}</Caption>
    </div>
  )
}

export default Slide;

const Image = styled.img`
  display: block;
  max-width: 1190px;
  width: 100%;
`

const Caption = styled.p`
  position: absolute;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 85px;
  margin-left: auto;
  margin-right: auto;
  width: 959px;
`
