import React from 'react';
import { connect, styled } from 'frontity';

const ContentMobile = ({ content }) => {

  return (
    <Container>
      <LineBreak />
      <Bio dangerouslySetInnerHTML={{__html: content}} />
      <LineBreak />
    </Container>
  )
}

export default connect(ContentMobile)

const Container = styled.div`
  margin-bottom: 20px;
  @media (min-width: 985px) {
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
  width: 100%;
`
