import React, { useState } from "react";
import { connect, styled, css } from "frontity";
import vectorImage from "../../assets/Vector.png";

const Grant = ({ logo, title, description, amount, year, program, category, rowKey, index }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <DataCell key={`${rowKey} - ${index}`}>
      <Row>
        <TitleCol>
          <ImageContainer>
            <img load="lazy" src={logo}/>
          </ImageContainer>
          {title}
        </TitleCol>
        <TitleCol>
          <ToggleDescription
          css={css`transform: ${(showDescription) ? 'rotate(0)' : 'rotate(180deg)'}`}
          onClick={() => {
            setShowDescription(!showDescription);
          }}>
            <img load="lazy" src={vectorImage}/>
          </ToggleDescription>
        </TitleCol>
      </Row>
      <LineBreak css={css`display: ${(showDescription) ? 'flex' : 'none'}`}/>
      <Row css={css`display: ${(showDescription) ? 'flex' : 'none'}`}>
        {description}
      </Row>
      <LineBreak />
      <Row>
        <Col>
          <DataTitle>Amount</DataTitle>
          {amount}
        </Col>
        <Col>
          <DataTitle>Year</DataTitle>
          {year}
        </Col>
        <Col>
          <DataTitle>Program</DataTitle>
          {program}
        </Col>
        <Col>
          <DataTitle>Category</DataTitle>
          {category}
        </Col>
      </Row>
    </DataCell>
  )
}
export default connect(Grant);

const DataCell = styled.div`
  background: #FFFFFF;
  margin-bottom: 10px;
  padding: 40px 8vw 10px 8vw;
  border-radius: 5px;
`

const ToggleDescription = styled.div`
  position: absolute;
  display: flex;
  background: #8EC442;
  color: #FFFFFF;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  top: calc(50% - 25px);
  right: 0;

  img {
    width: 22px;
    height: 14px;
    margin: auto;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    bottom: 0;
    top: auto;
  }
`

const LineBreak = styled.hr`
  margin: 20px 0px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;

  :last-child {
    @media (max-width: 900px) {
      flex-direction: column;

      div {
        flex-direction: row;

        p::first-child {
          width: 90px;
        }
      }
    }
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`

const TitleCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-wrap: break-word;
  width: 80%;

  img {
    max-width: 150px;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 50px;
  }

  h2 {
    margin-bottom: 0;
  }

  :last-child {
    width: 20%;
    align-items: center;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    h2 {
      margin-top: 20px;
    }
  }
`

const ImageContainer = styled.div`
  height: 150px;
`

const DataTitle = styled.p`
  text-transform: uppercase;
  color: #6B6B6B;
  font-weight: 600;
  margin-right: 60px;

  @media (max-width: 900px) {
    width: 71px;
  }
`
