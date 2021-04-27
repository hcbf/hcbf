import React from "react";
import { styled, css } from "frontity";
import Link from "@frontity/components/link";

const HiddenItems = ({ children, isMobile, visibility, item }) => {
  return (
    <Container css={css`${(visibility) ? 'display: flex' : 'display: none' }`}>
      {isMobile &&

        <NavItem key={item.ID} className="text-nowrap">
          <LineBreak />
          <Link link={item.url}>{item.title}</Link>
        </NavItem>
      }

      {children.map((child_item) => {
        return (
          <NavItem key={child_item.ID} className="text-nowrap">
            <LineBreak />
            <Link link={child_item.url}>{child_item.title}</Link>
          </NavItem>
        )
      })}
    </Container>
  )
}

export default HiddenItems;

const Container = styled.div`
  position: absolute;
  margin-top: 0 !important;
  padding-bottom: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 5px;

  @media (max-width: 1199px) {
    a {
      font-size: 18px;
    }
  }
`

const NavItem = styled.div`
  padding-right: 50px;
  padding-left: 10px;

  color: #1B75BB;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;

  a {
    display:inline-block;
    max-width: 300px;
    white-space: pre-wrap;
  }

  :hover {
    text-decoration: underline;

    a {
      color: #8EC442;
    }
  }

  @media (max-width: 1199px) {
    margin-top: 0.25rem;
  }
`

const LineBreak = styled.hr`
  text-align: center;
  margin: 10px -30px 10px 5px;

  @media (max-width: 1199px) {
    display: none;
  }
`
