import React from "react";
import { connect, css } from "frontity";
import Container from "react-bootstrap/Container";

const MeetingInfo = ({ state }) => {
  const items = state.source.get(`/acf/${state.theme.meetingsPage.id}`).items;

  return (
    <Container css={css`
        p {
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: #000000;
          width: 100%;

          :first-child {
            margin-bottom: 5px;
          }
        }
      `}>
      <p>{items.meeting_time}</p>
      <p>Location: {items.meeting_location}</p>
    </Container>
  )
}

export default connect(MeetingInfo);
