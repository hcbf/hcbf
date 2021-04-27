import React from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";

const DisplayPostPreview = ({ post }) => {
  return (
    <li>
      <PostDate>{post.children[1].children[0].content}</PostDate>
      <PostTitle>{post.children[0].children[0].content}</PostTitle>
      <ReadMore link={post.children[0].props.href}>Read More</ReadMore>
    </li>
  )
}

export default connect(DisplayPostPreview);

const PostDate = styled.time`
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;
`

const PostTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: top;
  text-transform: capitalize;
  width: 445px;
  height: 54px;
`

const ReadMore = styled(Link)`
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
`
