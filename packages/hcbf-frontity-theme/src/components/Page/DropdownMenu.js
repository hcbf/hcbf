import React from 'react';
import { connect, styled, css } from 'frontity';
import Link from "@frontity/components/link";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownMenu = ({ state, actions, pageTitle, parentPage, items }) => {

  return (
    <Menu>
      {items.map((item, index) => {
        return (
          <>
            <div key={item.ID}>
              <Link link={item.url} key={item.ID + "link"} css={(pageTitle == item.title) ? css`color:#8EC442;` : css`color: #1B75BB;`}>
                {item.title}
              </Link>
            </div>
          </>
        )
      })}
    </Menu>
  )
};

export default connect(DropdownMenu);

const Menu = styled.nav`
  @media (min-width: 1140px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  div {
    display: flex;
    width: inherit;
    height: 30px;
    :hover {
      background: #F2F2F2;
      text-decoration: underline;
      cursor: pointer;
    }

    a {
      height: 100%;
      width: 100%;
      :hover {
        color: #8EC442;
      }
    }
  }
`
