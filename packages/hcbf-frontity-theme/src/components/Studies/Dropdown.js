import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import Content from './Content.js';

const Dropdown = ({ item }) => {

  const [expandView, setExpandView] = useState(false);
  const content = item;

  return (
    <div>
      <ContentControl onClick={() => {expandView ? setExpandView(false) : setExpandView(true)} }>
        <Button>
          { expandView === false && 'Click Here to View More'}
          { expandView === true && 'Click Here to View Less'}
        </Button>
        <Arrow>
          { expandView === false && '>' }
          { expandView === true && '<' }
        </Arrow>
      </ContentControl>

      { expandView === true &&
        <ContentArea>
          <Line />
          <Content content={item.children} />
        </ContentArea>
      }
    </div>
  );
}

export default connect(Dropdown);

const ContentControl = styled.div`
  display: inline-block;

  :hover {
    cursor: pointer;

    p:first-child {
      text-decoration: underline;
    }
  }
`

const Button = styled.p`
  display: inline-block;
  color: #1B75BB;
  margin-bottom: 0;
`

const Arrow = styled.p`
  display: inline-block;
  margin-left: 5px;
  font-size: 22px;
  color: #1B75BB;
  transform: rotate(90deg);
  margin-bottom: 0;
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const Line = styled.div`
  background: #000000;
  height: auto;
  width: 3px;
  margin-right: calc(${60 / 1440} * 100vw);
`
