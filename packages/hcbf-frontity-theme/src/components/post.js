import React from "react";
import { connect, styled } from "frontity";
import Container from "react-bootstrap/Container";

const Post = ({ state, libraries }) => {

  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author]

  return (
    <PostContainer>
      <Title>{post.title.rendered}</Title>
      <BackButton href={(state.router.previous == "/blog/") ? "javascript:window.history.back()" : "/blog/"}>
        &#8249; Return to Posts
      </BackButton>
      <p>
        <strong>Posted: </strong>
        {post.date}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <Html2React html={post.content.rendered} />
    </PostContainer>
  )
}

export default connect(Post);

const PostContainer = styled(Container)`
  max-width: 1140px;
  background: #FFFFFF;
  border: solid 15px #F2F2F2;
  border-bottom: none;
  padding: 0;
  padding-left: 8%;
  padding-right: 8%;
  margin: auto;
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
  margin-bottom: 1.25rem;
`

const BackButton = styled.a`
  position: relative;
  margin-bottom: 1.5rem;
`
