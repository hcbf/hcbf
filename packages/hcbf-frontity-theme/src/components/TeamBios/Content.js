import React from 'react';
import { connect, styled } from 'frontity';

const Content = ({ content }) => {

  return (
    <Container>
      <LineBreak />
      <Bio dangerouslySetInnerHTML={{__html: content}} />
      <LineBreak />
    </Container>
  )
}

export default connect(Content)

const Container = styled.div`
  margin-bottom: 20px;
  @media (max-width: 985px) {
    display: none;
  }
`

const LineBreak = styled.hr`
  max-width: 925px;
  text-align: left;
  margin: 20px 90px 20px 0px;
`

const Bio = styled.div`
  max-width: 925px;
  padding-left: 10px;
`
