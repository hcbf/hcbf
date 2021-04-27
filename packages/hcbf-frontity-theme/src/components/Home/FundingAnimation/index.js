import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColumnLayout from './ColumnLayout';

const FundingContainer = ({ title, innerColumns }) => {

  return(
    <FundingSection className="home-container current-funding">
      <Title>{title}</Title>
      <Row css={css`width: 100%; margin-bottom: 10px;`}>
        {innerColumns.map((child, index) => {
          const field = innerColumns[index].children[0].children[0].children[1].children[0].content;
          const number = innerColumns[index].children[0].children[0].children[0].children[0].content;
          const extractedNumber = (number).match(/\d+\.?/g);

          return (
            <Col key={"funding" + index}>
              <ColumnLayout number={number} extractedNumber={extractedNumber} field={field} />
            </Col>
          )
        })}
      </Row>
    </FundingSection>
  );
}

export default connect(FundingContainer)

const FundingSection = styled(Container)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 251px;
  border-radius: 5px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 20px;

  p {
    margin-bottom: 0;
  }
`

const InnerContainer = styled.div`
  width: 100%;
  margin: 0 0 20px 30px;
`

const Title = styled.h2`
  margin-bottom: 20px !important;
  width: 100%;
  color: #8EC442;
`
