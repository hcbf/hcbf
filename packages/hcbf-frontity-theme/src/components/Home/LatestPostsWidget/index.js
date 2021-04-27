import React from 'react';
import { connect, styled } from 'frontity';
import DisplayPostPreview from './DisplayPostPreview';

const LatestPosts = ({ postList }) => {
  return (
    <PostList>
      <DisplayPostPreview post={postList[0]} />
      <LineBreak />
      <DisplayPostPreview post={postList[1]} />
      <LineBreak />
      <DisplayPostPreview post={postList[2]} />
    </PostList>
  )
}

export default connect(LatestPosts);

const PostList = styled.ul`
  list-style-type: none;
`

const LineBreak = styled.hr`
  text-align: left;
  margin: 20px -15px 20px 0px;
`
