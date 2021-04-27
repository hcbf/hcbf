import React from 'react';
import { connect, styled } from 'frontity';

const Record = ({ title, records }) => {

  return (
    <Content>
      <Title>{title.children[0].content}</Title>
      {records.map((record) => {
        return (
          <record.component>
            {(record.children.length >= 1) ?
              record.children.map((item, index) => {
                if (item.component != undefined) {
                  return (
                    <a href={item.props.href}
                      rel={item.props.rel}
                      target={item.props.target}>
                      {item.children[0].content}
                    </a>
                  )
                }
                return item.content;


              }) :
              null
            }
          </record.component>
        )
      })}
    </Content>
  );
}

export default connect(Record);

const Content = styled.div`
  width: 317px;
  margin-right: 30px;
  margin-bottom: 30px;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  a {
    font-size: 18px;
    text-decoration: none;
    color: #1B75BB;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Title = styled.h2`
  color: #8EC442;
  font-size: 36px;
`
