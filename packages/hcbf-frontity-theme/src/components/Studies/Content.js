import React from 'react';
import { connect, styled } from 'frontity';
import Dropdown from './Dropdown.js';

const Content = ({ content }) => {

  // Check if component is anchor
  const isAnchor = ( item, elm ) => {
    if (item.component === 'a') {
      let content = "";
      if (item.children[0] !== undefined) {
        content = item.children[0].content;
      }

      return <a href={item.props.href} target={item.props.target} rel={item.props.rel}>{content}</a>
    }
    return elm;
  };

  // Check if component is image
  const isImg = ( item, elm ) => {
    if (item.children[0].component === 'img') {
      const component = item.children[0];
      return (
        <img src={component.props.src}
          srcSet={component.props.srcSet}
          sizes={component.props.sizes}
          loading={component.props.loading}
          className={component.props.className}
          alt={component.props.alt} />
      )
    }
    return elm;
  };

  // Check if component is line break
  const isBr = (item, elm ) => {
    if (item.component === 'br') {
      return <br />
    }
    return elm;
  };

  return (
    <ContentContainer>
      {content.map((item) => {

        if (item.component === 'div' && /workshop-dropdown/.test(item.props.className)) {
          return <Dropdown item={item.children[0]} />
        }

        if (item.component === 'ul') {
          return (
            <ul>
              <Content content={item.children} />
            </ul>
          )
        }

        if (item.children.length > 1) {
          return (
            <item.component>
              {item.children.map((i) => {
                if (i.type === 'text') {
                  return i.content;
                }

                let elm = "";
                if (i.children[0] !== undefined) {
                  elm = <i.component className={i.props.className}>{i.children[0].content}</i.component>
                }
                elm = isAnchor(i, elm);
                if (i.children[0] !== undefined) {
                  elm = isImg(i, elm);
                }
                elm = isBr(i, elm);
                return elm;

              })}
            </item.component>
          )
        }

        let elm = "";
        if (item.children[0] !== undefined) {
          elm = <item.component className={item.props.className}>{item.children[0].content}</item.component>
        }
        elm = isAnchor(item, elm);
        if (item.children[0] !== undefined) {
          elm = isImg(item, elm);
        }
        elm = isBr(item, elm);
        return elm;

      })}
    </ContentContainer>
  );
};

export default connect(Content);

const ContentContainer = styled.div`
  img {
    width: 100%;
    margin-bottom: 40px;
  }

  a {
    color: #1B75BB;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
  }

  ul {
    list-style: none;
    margin-bottom: 20px;
  }

  li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
  }

  li::before {
    content: "- "
  }
`
