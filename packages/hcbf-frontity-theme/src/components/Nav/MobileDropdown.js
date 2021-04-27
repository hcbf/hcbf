import React, { useState } from "react";
import { connect, styled, css } from "frontity";
import HiddenItems from "./HiddenItems";

const MobileDropdown = ({ item }) => {

  const [visibility, setVisibility] = useState(false);

  return (
    <Dropdown>
      <DropdownButton key={item.ID + "mobile"} className="text-nowrap"
        css={css`${(visibility) ? 'background-color: #8EC442': 'background-color: transparent'}`}
        onClick={() => {
          setVisibility(!visibility);
        }}>
        <p>{item.title}</p>
        <span css={css`
          display: inline-block;
          ${(visibility) ? 'transform: rotate(90deg)': 'transform: rotate(270deg)'}`}>&#8249;</span>
      </DropdownButton>
      <HiddenItems children={item.child_items}
        isMobile={true}
        visibility={visibility}
        item={item} />
    </Dropdown>

  )
}

export default connect(MobileDropdown)

const Dropdown = styled.div`
  @media (min-width: 1199px) {
    display: none;
  }
`

const DropdownButton = styled.div`
  display: inline-block;
  overflow-wrap: break-word;
  max-width: 300px;

  margin-right: 50px;
  margin-left: 10px;

  color: #FFFFFF;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 5px;
  padding: 0 10px;

  p {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 1rem;
  }

  :hover {
    background-color: #8EC442;
    cursor: pointer;
  }

  @media (min-width: 1199px) {
    display: none;
  }
`
