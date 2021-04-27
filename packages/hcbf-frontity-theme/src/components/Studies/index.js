import React, { useState } from 'react';
import { connect, styled, css } from 'frontity';
import Content from './Content.js';

const Studies = ({ titles, content }) => {

  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div>
      <Nav>
        {titles.map((item, index) => {
          return (
            <Button
              css={(contentIndex == index) ? css`background-color: #8EC442; h2 {color: #FFFFFF;}` : css`background-color: transparent; :hover{background: #F2F2F2;}`}
              onClick={(() => {
                setContentIndex(index);
              })}>
              <item.component className={item.props.className}>{item.children[0].content}</item.component>
            </Button>
          );
        })}
      </Nav>
      <Content content={content[contentIndex].children} />
    </div>
  );
}

export default connect(Studies);

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    margin: 20px 5px 15px 5px !important;
  }
`

const Button = styled.div`
  border-radius: 5px;
  margin-right: 30px;

  :hover {
    cursor: pointer;
  }
`
