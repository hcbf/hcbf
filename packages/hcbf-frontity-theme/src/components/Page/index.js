import React from "react";
import { connect, styled } from "frontity";
import Container from "react-bootstrap/Container";
import Submenu from "./Submenu";
import DropdownMenu from "./DropdownMenu";

const Page = ({ state, actions, libraries }) => {

  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const array = page.link.split('/').filter(index => index !== "");
  const parentPage = array[0];

  const items = state.source.get(`/menu/${state.theme.aboutSubmenuUrl}`).items;

  return (
    data.isReady &&

    <PageContent fluid="xl">
      { parentPage === 'about' &&
        <Submenu state={state} actions={actions} pageTitle={page.title.rendered} parentPage={parentPage} items={items} />
      }
      <Title>{page.title.rendered}</Title>
      { parentPage === 'about' &&
        <DropdownMenu state={state} actions={actions} pageTitle={page.title.rendered} parentPage={parentPage} items={items} />
      }
      <Html2React html={page.content.rendered} />
    </PageContent>
  )
}

export default connect(Page);

const PageContent = styled(Container)`
  max-width: 1140px;
  background: #FFFFFF;
  border: solid 15px #F2F2F2;
  border-bottom: none;
  padding: 0;
  padding-left: 8%;
  padding-right: 8%;
  overflow: hidden;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: calc(${64 / 1440} * 100vw);

  @media (max-width: 900px) {
    font-size: 32px;
  }
  line-height: 96px;
  display: flex;
  align-items: center;
  color: #8EC442;
  margin-top: 70px;
  margin-bottom: 20px;
`
