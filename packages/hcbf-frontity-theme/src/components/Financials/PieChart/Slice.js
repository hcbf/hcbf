import React from 'react';
import { connect, styled, css } from 'frontity';

const Slice = ({ angle, radius, key, opacity, style, holdColor, highlight, name }) => {

  const dx = radius * Math.sin(angle);
  const dy = radius * (1 - Math.cos(angle));

  return (
    <path
      css={css`opacity: ${opacity}; :hover {cursor: pointer; opacity: 1}}`}
      style={{...style}}
      d={`M${radius} ${radius} V0a ${radius} ${radius} 0 0 1 ${dx} ${dy} z`}
      onMouseEnter={() => {
        if (highlight !== null) {
          highlight[1](1);
        }
      }}
      onMouseLeave={() => {
        (highlight !== null && holdColor[0].includes('80')) ?
        highlight[1](0) :
        highlight[1](1);
      }}
      onClick={() => {
        if (holdColor[0] !== null) {
          if (holdColor[0].includes('80')) {
            holdColor[1](holdColor[0].replace(/80/, ' '));

          } else {
            holdColor[1](holdColor[0].replace(/ /, '80'));

          }
        }
      }}
      ><title>{ name !== null && name }</title></path>
  )
}

export default connect(Slice);
