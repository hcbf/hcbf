import React, {useState} from "react";
import { connect, styled, css } from "frontity";
import Container from "react-bootstrap/Container";

const Legend = ({ projects, funding, fillColors, highlightArray, holdColorArray }) => {

  const count = projects.length;
  const half = Math.ceil(count/2);

  return (
    <Row>
      <Column>
        {projects.map((project, index, pie) => {
          return (
            (index <= half - 1) ?
            <Item>
              <Button onMouseEnter={() => {
                  highlightArray[index](1);
                }}
                onMouseLeave={() => {
                  (holdColorArray[index][0].includes('80')) ?
                  highlightArray[index](0) :
                  highlightArray[index](1);
                }}
                onClick={() => {
                  holdColorArray[index][0].includes('80') ?
                  holdColorArray[index][1](holdColorArray[index][0].replace(/80/, ' ')) :
                  holdColorArray[index][1](holdColorArray[index][0].replace(/ /, '80'))
                }}>
                <Color css={css`background: ${fillColors[index]};
                  box-shadow: 0px 0px 1px 5px ${holdColorArray[index][0].includes('80') ? '#FFFFFF' : fillColors[index] + '80'};`} />
                <p>{project + ':'}</p>
                <p>{'$' + funding[index]}</p>
              </Button>
            </Item> : null
          )
        })}
      </Column>

      <Column>
        {projects.map((project, index) => {
          return (
            (index > half - 1) ?
            <Item>
              <Button onMouseEnter={() => {
                  highlightArray[index](1);
                }}
                onMouseLeave={() => {
                  (holdColorArray[index][0].includes('80')) ?
                  highlightArray[index](0) :
                  highlightArray[index](1)
                }}
                onClick={() => {
                  holdColorArray[index][0].includes('80') ?
                  holdColorArray[index][1](holdColorArray[index][0].replace(/80/, ' ')) :
                  holdColorArray[index][1](holdColorArray[index][0].replace(/ /, '80'))
                }}>
                <Color css={css`background: ${fillColors[index]};
                  box-shadow: 0px 0px 1px 5px ${holdColorArray[index][0].includes('80') ? '#FFFFFF' : fillColors[index] + '80'};`}
                  />
                <p>{project + ':'}</p>
                <p>{'$' + funding[index]}</p>
              </Button>
            </Item> : null
          )
        })}
      </Column>
    </Row>
  )
}

export default connect(Legend);

const Row = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;

  p {
    font-size: 16px;
    margin-right: 15px;
    margin-bottom: 0;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.div`
  display: inline-block;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  div, p {
    display: inline-block;
  }

  :hover {
    cursor: pointer;
  }
`

const Color = styled.div`
  height: 20px;
  width: 20px;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 20px;
`
