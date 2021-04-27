import React from 'react';
import { connect, styled } from 'frontity';

const DateConverter = ({ date }) => {
  date = date.split("-");

  const year = date[0];
  let day = date[2];
  let month = date[1];

  if (day.length > 2) {
    day = day.substring(0, 2);
  }

  switch (month) {
    case "01":
      month = "JAN";
      break;
    case "02":
      month = "FEB";
      break;
    case "03":
      month = "MAR";
      break;
    case "04":
      month = "APR";
      break;
    case "05":
      month = "MAY";
      break;
    case "06":
      month = "JUN";
      break;
    case "07":
      month = "JUL";
      break;
    case "08":
      month = "AUG";
      break;
    case "09":
      month = "SEP";
      break;
    case "10":
      month = "OCT";
      break;
    case "11":
      month = "NOV";
      break;
    case "12":
      month = "DEC";
      break;
    default:
      month = null;
      break;
  }

  return (
    <DateBlock>
      <h2>{day}</h2>
      <h1>{month}</h1>
      <h2>{year}</h2>
    </DateBlock>
  )
};

export default connect(DateConverter);

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130px;
  width: 94px;
  background: #1B75BB;
  border-radius: 5px;
  margin-right: 70px;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin: 0;
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin: 0;
  }
`
