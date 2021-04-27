import React from "react";
import { connect, styled } from "frontity";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MeetingMinutes = ({ libraries, title, minutes }) => {

  const Html2React = libraries.html2react.Component;
  let numberOfCols = minutes.length;
  let currentCol = numberOfCols - 1;
  const numberOfRows = Math.ceil(numberOfCols / 3);

  return (
    <Content>
      <h2 className={title.props.className}>{title.children[0].content}</h2>
      {[...Array(numberOfRows)].map((items) => {

        return (
          <Row>
            {[...Array(3)].map((items) => {
              let index = currentCol - (numberOfCols - 1);
              numberOfCols -= 1;
              let year = null;
              let list = null;

              if (minutes[index] !== undefined) {
                list = minutes[index].children[0].children;
                year = list.shift();
              }

              return (
                <Col>
                  {
                    (minutes[index] !== undefined) &&

                    <h2 className={year.props.className}>{year.children[0].content}</h2>
                  }

                  <ul>
                    {
                      (minutes[index] !== undefined) &&

                      list[0].children.map((item) => {
                        if (item.children.length > 0) {
                          return (
                            <li>
                              <a href={item.children[0].props.href} target="_blank">
                                {item.children[0].children[0].content}
                              </a>
                            </li>
                          )
                        }
                        return null;
                      })
                    }
                  </ul>
                </Col>
              )
            })}
          </Row>
        )
      })}
    </Content>
  )
}

export default connect(MeetingMinutes);

const Content = styled(Container)`
  ul {
    list-style-type: none;
  }
`
