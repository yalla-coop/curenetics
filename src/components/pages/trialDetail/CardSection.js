import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';

import Arrow from '../../common/icons/Arrow.jsx';
import CardField from './CardField';

const Section = styled.section`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  text-align: left;
  line-height: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: ${colors.boxShadow};
`;

const CenterDev = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardSection = ({
  fileName = '3', age = '3', gender = 'male', trials = '2',
}) => (
    <Section>
      <CardField>
        File name: <br />
        {fileName}
      </CardField>
      <CardField>
        Age: <br />
        {age}
      </CardField>
      <CardField>
        Gender: <br />
        {gender}
      </CardField>
      <CardField>
        Potentially <br />
        Eligible Trials:
    </CardField>
      <CardField >
        {trials}
      </CardField>
      <CardField flexGrow="2">
        <Link to="/">
          <CenterDev>
            View more details
            <Arrow />
          </CenterDev>
        </Link>
      </CardField>
    </Section>
);

export default CardSection;
