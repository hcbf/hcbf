import React from "react";
import { connect, styled } from "frontity";
import Container from "react-bootstrap/Container"
import Record from "./Record.js";

const Financials = ({ records }) => {

  return (
    <div>
      {records.map((item) => {
        return (
          <Row>
            {item.children.map((content) => {
              const title = content.children.shift();
              const records = content.children;
              return <Record title={title} records={records} />
            })}
          </Row>
        )
      })}
    </div>
  );
}

export default connect(Financials);

const Row = styled(Container)`
  display: flex;
  flex-direction: row;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`
