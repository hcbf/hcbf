import React, { useState } from 'react';
import { connect, styled, css } from 'frontity';
import { Container, Row } from "react-bootstrap";
import TeamMember from './TeamMember.js';
import Content from './Content.js';

const BioContainer = ({ teamMembers, lastRow }) => {

  const [currentIndex, setCurrentIndex] = useState(3);
  const [showContent, setShowContent] = useState(false);

  let bioContent = [];
  teamMembers.map(profile => {
    if (profile.children[profile.children.length - 1] !== undefined) {
      let contentArray = profile.children[profile.children.length - 1].children[0].children;
      let appendedContent = [];
      contentArray.map(content => {
        appendedContent += `<p>${content.children[0].content}</p>`;
      });
      bioContent.push(appendedContent);
    }
  });

  return (
    <PageContent>
      <RowContent>
        { teamMembers[0].children[0] !== undefined &&
          <TeamMember
            profPic={teamMembers[0].children[0].children[0]}
            name={teamMembers[0].children[1].children[0].content}
            title={teamMembers[0].children[2].children[0].content}
            contact={teamMembers[0].children[3].children[0].content !== undefined && teamMembers[0].children[3].children[0].content}
            index='0'
            currentIndex={currentIndex}
            showContent={showContent}
            bioContent={bioContent}
            openBio={() => {
              if (showContent && currentIndex === 0) {
                setShowContent(false);

              } else if (showContent && currentIndex !== 0) {
                setCurrentIndex(0);

              } else {
                setCurrentIndex(0);
                setShowContent(true);
              }

            }} />
        }
        { teamMembers[1].children[0] !== undefined &&
          <TeamMember
            profPic={teamMembers[1].children[0].children[0]}
            name={teamMembers[1].children[1].children[0].content}
            title={teamMembers[1].children[2].children[0].content}
            contact={teamMembers[1].children[3].children[0].content !== undefined && teamMembers[1].children[3].children[0].content}
            index='1'
            currentIndex={currentIndex}
            showContent={showContent}
            bioContent={bioContent}
            openBio={() => {
              if (showContent && currentIndex === 1) {
                setShowContent(false);

              } else if (showContent && currentIndex !== 1) {
                setCurrentIndex(1);

              } else {
                setCurrentIndex(1);
                setShowContent(true);
              }

            }} />
        }
        { teamMembers[2].children[0] !== undefined &&
          <TeamMember
            profPic={teamMembers[2].children[0].children[0]}
            name={teamMembers[2].children[1].children[0].content}
            title={teamMembers[2].children[2].children[0].content}
            contact={teamMembers[2].children[3].children[0].content !== undefined && teamMembers[2].children[3].children[0].content}
            index='2'
            currentIndex={currentIndex}
            showContent={showContent}
            bioContent={bioContent}
            openBio={() => {
              if (showContent && currentIndex === 2) {
                setShowContent(false);

              } else if (showContent && currentIndex !== 2) {
                setCurrentIndex(2);

              } else {
                setCurrentIndex(2);
                setShowContent(true);
              }

            }} />
        }
      </RowContent>
      { showContent && <Content content={bioContent[currentIndex]} />}
      { lastRow === true && showContent === false && <LineBreak />}
    </PageContent>
  );
};

export default connect(BioContainer);

const PageContent = styled(Container)`
  img {
    margin: 0;
    padding: 0;
  }
`

const RowContent = styled(Row)`
  margin-bottom: 0 !important;

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;
  }
`

const LineBreak = styled.hr`
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
`
