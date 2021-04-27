import React, { useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import Grant from "./Grant";
import placeholderLogo from "../../assets/DatabaseLogoPlaceholder.png";

const Table = ({ dataSource, logos, columns, rowKey }) => {

  let logo = placeholderLogo;
  let title = null;
  let description = null;
  let amount = null;
  let year = null;
  let program = null;
  let category = null;

  return (
    <Display>
      {dataSource.map((grant, index) => {

        logos.map(({ title, url }) => {
          let re = new RegExp(`${title}`);
          if (re.test(`${grant['Organization (Grant Awardee)']}`)) {
            return logo = url
          }
        });

        columns.map((data) => {
          if (/Organization/.test(data.title)) {
            title = (
              <h2 className={data.title} key={`${data.title} - ${index}`}>
                {grant[data.title]}
              </h2>
            )
          }

          if (/Description/.test(data.title)) {
            description = (
              <p className={data.title} css={css`margin: 0;`} key={`${data.title} - ${index}`}>
                {grant[data.title]}
              </p>
            )
          }

          if (/Amount/.test(data.title)) {
            amount = (
              <p className={data.title} css={css`max-width: 155px;`} key={`${data.title} - ${index}`}>
                ${grant[data.title]}
              </p>
            )
          }

          if (/Year/.test(data.title)) {
            year = (
              <p className={data.title} css={css`max-width: 50px;`} key={`${data.title} - ${index}`}>
                {grant[data.title]}
              </p>
            )
          }

          if (/Program/.test(data.title)) {
            program = (
              <p className={data.title} css={css`max-width: 265px;`} key={`${data.title} - ${index}`}>
                {grant[data.title]}
              </p>
            )
          }

          if (/Category/.test(data.title)) {
            category = (
              <p className={data.title} css={css`max-width: 300px;`} key={`${data.title} - ${index}`}>
                {grant[data.title]}
              </p>
            )
          }
        })

        return (
          <Grant
            logo={logo}
            title={title}
            description={description}
            amount={amount}
            year={year}
            program={program}
            category={category}
            rowKey={rowKey}
            index={index}
          />
        )
      })}
    </Display>
  )
}

export default connect(Table);

const Display = styled.div`
  background: #F2F2F2;
  padding-top: 10px;
`
