import React, { useState } from 'react';
import { connect, styled, css} from 'frontity';
import Container from "react-bootstrap/Container";
import Slice from './Slice.js';
import Legend from './Legend.js';

const PieChart = ({ projects, funding, fillColors }) => {

  let radius = 150;
  const innerRadius = radius * .95;

  let data = [];
  funding.map((item) => {
    item = item.replace(/,/g, "")
    data.push(parseInt(item));
  });

  const total = data.reduce((a,b) => { return a + b }, 0);
  const diameter = 2 * radius;
  let rotate = 0.05 * Math.PI;

  let highlightArray = [];
  let holdColorArray = [];

  return (
    <Container>
      <Pie width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}>
        {
          data.map((item, index) => {
            const angle = 2 * Math.PI * item / total;
            let fill = `${fillColors[index]}`;
            let og = `rotate(${rotate}rad)`;
            let transform = og + `scale(.9)`;
            let transformOrigin = `${radius}px ${radius}px`;
            rotate += angle;

            const [highlight, setHighlight] = useState(0);
            highlightArray.push(setHighlight);

            const [holdColor, setHoldColor] = useState(`${fillColors[index] + 80}`);
            holdColorArray.push([holdColor, setHoldColor]);

            const name = projects[index];

            return (
              <g>
                <Slice angle={angle}
                radius={radius}
                opacity={'1'}
                style={{ fill, transform, transformOrigin }}
                holdColor={null}
                highlight={null}
                name={null}
                />

                {
                  fill = holdColor,
                  transform = og
                }

                <Slice angle={angle}
                radius={radius}
                opacity={highlight}
                style={{ fill , transform, transformOrigin }}
                holdColor={[holdColor, setHoldColor]}
                highlight={[highlight, setHighlight]}
                name={name}
                />
              </g>
            )
          })
        }
      </Pie>
      <Legend projects={projects}
        funding={funding}
        fillColors={fillColors}
        highlightArray={highlightArray}
        holdColorArray={holdColorArray} />
    </Container>
  );
}

export default connect(PieChart);

const Pie = styled.svg`
  margin-bottom: 30px;
`
