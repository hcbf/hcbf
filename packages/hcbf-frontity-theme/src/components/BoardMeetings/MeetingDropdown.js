import React, { useState } from "react";
import { connect, styled, css } from "frontity";
import Container from "react-bootstrap/Container";

const MeetingDropdown = ({ button, content }) => {

  const [showContent, setShowContent] = useState(false);

  return (
    <Container>
      <Button onClick={() => {
          showContent ? setShowContent(false) : setShowContent(true)
        }}>
        <p className={button.props.className}>{button.children[0].content}</p>
        <Icon>
          {
            showContent ? "<" : ">"
          }
        </Icon>
      </Button>
      <Content css={
          showContent ? null : css`display: none`
        }>
        <p>
          {content.children.map((item, index) => {
            if (item.type === "element") {
              if (item.component === "br") {
                return <br />
              }

              if (item.component === "strong") {
                return (
                  <strong>
                    {item.children.map((subItem) => {
                      return subItem.content
                    })}
                  </strong>
                )
              }

            } else {
              return item.content
            }
          })}
        </p>
      </Content>
    </Container>
  )
}

export default connect(MeetingDropdown);

const Content = styled.div`

`

const Button = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-bottom: 10px;
  }

  p:first-child {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

const Icon = styled.p`
  font-size: 22px;
  text-align: center;
  color: #1B75BB;
  transform: rotate(90deg);
  width: 30px;
  padding-right: 10px;
  margin-bottom: 0;
`
