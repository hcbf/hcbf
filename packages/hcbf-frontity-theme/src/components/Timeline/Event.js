import React from 'react';
import { connect, styled } from 'frontity';

const Event = ({ event }) => {
  return (
      <p>{event}</p>
  );
};

export default connect(Event);
