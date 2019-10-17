import React, { useState } from 'react';
import styled from 'styled-components';
import TrialDetailHeader from './TrialDetailHeader';
import CardSection from './CardSection';

const CardContainer = styled.div`
  padding: 1rem;
`;

const dummyData = [
  {
    fileName: 23,
    age: 55,
    gender: 'male',
    trials: 4,
  },
  {
    fileName: 3,
    age: 98,
    gender: 'male',
    trials: 21,
  },
  {
    fileName: 83,
    age: 73,
    gender: 'male',
    trials: 0,
  },
  {
    fileName: 13,
    age: 47,
    gender: 'female',
    trials: 3,
  },
];
// this is going to be a class component
// the data is placeholder for the state
const TrialDetail = () => {
  const [list, setList] = useState(dummyData);
  return (
    <>
      <TrialDetailHeader setList={setList} />
      <CardContainer>
        {list.map(i => (
          <CardSection key={i.fileName} data={i} />
        ))}
      </CardContainer>
    </>
  );
};

export default TrialDetail;
