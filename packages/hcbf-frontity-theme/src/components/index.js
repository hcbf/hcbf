import React from "react";
import { connect, Head, Global, css, styled } from "frontity";
import Switch from "@frontity/components/switch";

import gutenbergStyle from "../styles/gutenberg/style.css";
import gutenbergTheme from "../styles/gutenberg/theme.css";

import List from "./Blog/index";
import Post from "./post";
import Page from "./Page/index";
import Home from "./Home/index";
import Nav from "./Nav/index";

import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import { fixCss } from "../helpers/css";

const fixedBootstrapCss = fixCss(bootstrapCss);
const BootstrapStyles = () => (
  <Global styles={css(fixedBootstrapCss)} />
);

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <BootstrapStyles />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global
        styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            html {
              font-family: 'Poppins', sans-serif;
              background: #1B75BB;
            }

            figure {
              padding: 0;
              margin: 0;
            }

            h1, h2, h3, h4, h5, p, a {
              font-family: 'Poppins', sans-serif;
            }

            h1, p {
              margin-bottom: 1.25rem;
            }

            h1 {
              font-style: normal;
              font-weight: 600;
              font-size: calc(${64 / 1440} * 100vw);
              @media (max-width: 900px) {
                font-size: 2rem;
              }
              line-height: 96px;
              display: flex;
              align-items: center;
            }

            h2 {
              font-style: normal;
              font-size: 1.5rem;
              font-weight: bold;
              line-height: 36px;
              display: flex;
              align-items: center;
              margin-bottom: 10px;
            }

            p {
              line-height: 1.75em;
            }

            a {
              color: #1B75BB;

              :hover {
                color: #1B75BB;;
              }
            }


            /**
            * HCBF Colors
            */

            .has-hcbf-green-color {
              color: #8EC442;
            }

            .has-hcbf-green-background-color {
              background: #8EC442;
            }

            .has-hcbf-blue-color {
              color: #1B75BB;
            }

            .has-hcbf-blue-background-color {
              background: #1B75BB;
            }

            .has-hcbf-charcoal-color {
              color: #6B6B6B;
            }

            .has-hcbf-charcoal-background-color {
              background: #6B6B6B;
            }

            .has-hcbf-lightgray-color {
              color: #F2F2F2;
            }

            .has-hcbf-lightgray-background-color {
              background: #F2F2F2;
            }


            /**
            * Bootstrap Amendments
            */

            .col, .row, .container {
              padding: 0;
              margin: 0;
            }


            /**
            * Wordpress Class Amendments
            */

            hr.wp-block-separator {
              margin: 20px 0px 20px 0px;
              max-width: 100% !important;
              width: 100%;
            }
          `
        }
      />
      <Nav />
      <Main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Home when={data.isHome} />
          <Page when={data.isPage && !data.isHome} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root);

const Main = styled.main`
  padding-top: 125px;
  background: #1B75BB;
  overflow: hidden;
`
