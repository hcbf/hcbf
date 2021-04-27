import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Container from "react-bootstrap/Container";

const Home = ({ state, actions, libraries }) => {

  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const contactForm = state.source.get('/contact-form');
  const form = state.source['page'][contactForm.id];

  useEffect(() => {
    if (data.route === '/') {
      actions.source.fetch('/contact-form');
    }
  }, [state.router.link]);

  return (
    data.isReady && contactForm.isReady &&

    <HomeContainer fluid>
      <Html2React html={form.content.rendered} />
      <PageContent fluid="xl">
        <Html2React html={page.content.rendered} />
      </PageContent>
    </HomeContainer>
  )
}

export default connect(Home);

const HomeContainer = styled(Container)`
  margin: 0;
  padding: 0;
`

const PageContent = styled(Container)`
  max-width: 1140px;
  background: #F2F2F2;
  border: solid 15px #F2F2F2;
  border-bottom: none;
  padding: 0;

  .wp-block-column:nth-child(2n) {
    margin: 0 !important;
  }

  /**
  * Column Section
  */

  .wp-block-columns {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    @media (max-width: 1140px) {
      flex-direction: column;
    }
    flex-wrap: wrap;
    width: 100%;
  }

  .wp-block-column {
    width: 50%;
    @media (max-width: 1140px) {
      width: 100%;
    }
  }

  .wp-block-column.col1 {
    @media (min-width: 1140px) {
      padding-right: ${15 / 2}px;
    }
  }

  .wp-block-column.col2 {
    @media (min-width: 1140px) {
      padding-left: ${15 / 2}px;
    }
  }

  .home-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 15px;
    padding: 20px 30px 20px 30px;

    h2 {
      font-weight: bold;
    }

    a {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      display: inline-block;
      text-transform: capitalize;
      color: #1B75BB;

      :hover {
        text-decoration-line: underline;
      }
    }

    @media (max-width: 500px) {
      width: 100% !important;
      height: auto !important;
    }
  }

  .board-meeting {
    height: 208px;

    p {
      line-height: 1em;
    }
  }

  .latest-blog {
    height: 570px;
  }

  .twitter-feed {
    height: 542px;

    div {
      width: 100%;
    }
  }

  .current-funding {
    height: 236px;
    width: 100%;
    margin-bottom: 0;
  }
`
