import React from 'react';
import CardSection from './CardSection';

// data is just placeholder for now
const CardDetails = ({ data }) => (
  data.map((d, idx) => (
    <CardSection key={idx} />
  ))
);

export default CardDetails;
