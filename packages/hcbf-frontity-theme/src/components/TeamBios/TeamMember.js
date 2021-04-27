import React from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import Col from "react-bootstrap/Col";
import ContentMobile from './ContentMobile.js';

const TeamMember = ({ profPic, name, title, contact, index, currentIndex, showContent, bioContent, lastRow, openBio }) => {
  return (
    <Profile  css={lastRow || (!lastRow && showContent) ?

        ((currentIndex != index) ? css`@media (max-width: 985px) {margin-bottom: 40px;}` : null)

        : css`margin-bottom: 40px;`}>
      { profPic !== undefined && <img alt={profPic.props.alt} className={profPic.props.className} height="275" loading={profPic.props.loading} src={profPic.props.src} width="205" /> }
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Contact>{contact !== undefined && contact !== 0 && contact}</Contact>

      <ContentControl onClick={openBio}>
        <ReadMore>
          { showContent && currentIndex == index && 'Read Less' }
          { showContent && currentIndex != index && 'Read More' }
          { !showContent && 'Read More' }
        </ReadMore>
        <Icon>
          { showContent && currentIndex == index && '<' }
          { showContent && currentIndex != index && '>' }
          { !showContent && '>' }
        </Icon>
      </ContentControl>
      { showContent && currentIndex == index && <ContentMobile content={bioContent[currentIndex]} />}
    </Profile>
  )
}

export default connect(TeamMember);

const Profile = styled(Col)`
  @media (max-width: 985px) {
    width: 100%;
  }
`

const Name = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 0;
`

const Title = styled.p`
  font-family: Poppins;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 0;
`

const Contact = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 0;
`

const ContentControl = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  cursor: pointer;

  :hover {
    p:first-of-type {
      text-decoration-line: underline;
    }
  }
`

const ReadMore = styled.p`
  position: relative;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #1B75BB;
  margin-bottom: 0;
`

const Icon = styled.p`
  position: absolute;
  left: 110px;
  height: 30px;
  font-size: 22px;
  color: #1B75BB;
  transform: rotate(90deg);
  margin-bottom: 0;
`
