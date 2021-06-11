import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DateConverter from './dateConverter.js'

const List = ({ state, actions, libraries }) => {

  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const blogContent = state.source.get('/blog-content');
  const page = state.source['page'][blogContent.id];

  useEffect(() => {
    if (data.route === '/blog') {
      actions.source.fetch('/blog-content');
    }
  }, [state.router.link]);

  return (

    blogContent.isReady &&

    <ListContent fluid="xl">
      <Title>Blog</Title>
      <Html2React html={page.content.rendered}/>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const author = state.source['author'][post.author];
        console.log(author)
        const date = post.date;

        return (
          <>
            <LineBreak key={item.id + "linebreak"} />
            <PostBlock key={item.id}>
              <Col>
                <DateConverter date={date} />
              </Col>
              <Content xl={10}>
                <Row>
                  <PostTitle>{post.title.rendered}</PostTitle>
                </Row>
                <Row>
                  <Html2React html={post.excerpt.rendered}/>
                </Row>
                <BottomRow>
                  <Col>
                    {author && (<p>by {author.name}</p>)}
                  </Col>
                  <Col className="text-right">
                    <Link key={item.id} link={post.link}>Read More</Link>
                  </Col>
                </BottomRow>
              </Content>
            </PostBlock>
          </>
        )
      })}
    </ListContent>
  )
}

export default connect(List);

const ListContent = styled(Container)`
  max-width: 1140px;
  background: #FFFFFF;
  border: solid 15px #F2F2F2;
  border-bottom: none;
  padding-bottom: 20px;
  padding-left: 8%;
  padding-right: 8%;
`

const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 96px;
  display: flex;
  align-items: center;
  color: #8EC442;
  margin-top: 70px;
  margin-bottom: 20px;
`

  const PostBlock = styled.div`
    display: flex;
    flex-direction: row;

    .col {
      marign: 0;
      padding: 0;
    }

    @media (max-width: 400px) {
      .row {
        display: inline-block;
        word-break: break-word;
      }
    }
  `

  const LineBreak = styled.hr`
    text-align: left;
    margin: 20px -15px 20px 0px;
  `

  const Content = styled(Col)`
    max-width: 790px;
    margin: 0;
    padding: 0;
  `

  const PostTitle = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `

  const BottomRow = styled(Row)`
    display: flex;

    @media (max-width: 510px) {
      flex-direction: column;

      p {
        margin-bottom: 10px;
      }

      div.text-right {
        text-align: left !important;
      }
    }

    p {
      font-family: Poppins;
      font-style: italic;
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;
    }

    a {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-decoration: none;
      text-transform: capitalize;
      color: #1B75BB;

      :hover {
        text-decoration: underline;
      }
    }
  `
