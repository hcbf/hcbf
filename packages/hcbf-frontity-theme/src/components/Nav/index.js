import React from "react";
import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "@frontity/components/image";
import logoImage from "../../assets/HCBF-MASTER-Logo.png";
import MobileDropdown from "./MobileDropdown";
import HiddenItems from "./HiddenItems";
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <Header fixed="top" collapseOnSelect expand="xl">
      <Brand href="/"><Logo src={logoImage} /></Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavContainer className="mr-auto">
          {items.map((item) => {
            return (
              (item.child_items === undefined) ?

              <NavItem key={item.ID} className="text-nowrap">
                <Link link={item.url}>{item.title}</Link>
              </NavItem>

              :

              <>
                <Hoverdown key={item.ID + "dropdown"}>
                  <NavItem key={item.ID} className="text-nowrap" css={css`@media (max-width: 1199px) { display: none }`}>
                    <Link link={item.url}>{item.title}</Link>
                  </NavItem>
                  <HiddenItems children={item.child_items} isMobile={false} />
                </Hoverdown>
                <MobileDropdown item={item} />
              </>
            )
          })}
        </NavContainer>
      </Navbar.Collapse>
    </Header>
  )
}

export default connect(Nav);

const Header = styled(Navbar)`
  background-color: #FFFFFF;
  width: 100vw;
  height: 125px;
  z-index: 10;
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
  padding: 0;
  margin: 0;

  span {
    padding: 0;
    margin: 0;
  }

  button {
    margin-right: 50px;
  }

  .navbar-brand {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
`
const Logo = styled(Image)`
  width: 22ch;
  max-height: 125px;
  margin-left: 3.75rem;

  @media (max-width: 500px) {
    margin-left: 1.75rem;
    height: auto;
    width: 100%;
    max-width: 50ch;
  }
`

const Brand = styled(Navbar.Brand)`
  max-width: 50%;
`

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  right: 0;

  @media (max-width: 1199px) {
    position: absolute;
    background: rgba(0,0,0,0.75);
    width: 100%;
    height: 100vh;
    flex-direction: column;
    margin-top: 0;

    div {
      margin: 0 auto;
      margin-top: 0.5rem;
    }
  }
`

const NavItem = styled.div`
  margin-right: 50px;
  margin-left: 10px;

  color: #1B75BB;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;

  :hover {
    text-decoration: underline;

    a {
      color: #8EC442;
    }
  }

  @media (max-width: 1199px) {
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
`

const Hoverdown = styled.div`
  :hover {
    div {
      display: block;
      background: #FFFFFF;
      max-width: 300px;
      border-radius: 5px;
    }
  }
`

const LineBreak = styled.hr`
  display: relative;
  text-align: center;
  margin: 10px -30px 10px 5px;
`
