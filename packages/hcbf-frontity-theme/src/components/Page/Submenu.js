import React from 'react';
import { connect, styled, css } from 'frontity';
import Link from "@frontity/components/link";

const Submenu = ({ state, actions, pageTitle, parentPage, items }) => {

  return (
    <Menu>
      {items.map((item, index) => {
        return (
          <>
            { index !== 0 &&
              <LineBreak key={item.ID + "linebreak"} />
            }
            <div key={item.ID}>
              <Link link={item.url} css={(pageTitle == item.title) ? css`color:#8EC442;` : css`color: #1B75BB;`}>
                {item.title}
              </Link>
            </div>
          </>
        )
      })}
    </Menu>
  )
};

export default connect(Submenu);

const Menu = styled.nav`
  @media (max-width: 1140px) {
    display: none;
  }

  background: #FFFFFF;
  border: 1px solid #1B75BB;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 415px;
  margin: 20px 0 40px 40px;
  padding: 20px 0 20px 0;
  list-style-type: none;
  float: right;

  a {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    max-width: 359px;
    text-decoration: none;
    margin-left: 30px;

    :hover {
      color: #8EC442;
      text-decoration: underline;
    }
  }
`

const LineBreak = styled.hr`
  margin: 15px 28px 15px 28px;
`
