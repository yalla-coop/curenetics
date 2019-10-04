import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';
import { sectionMixin, cardMixin } from '../../common/Layout';

import Arrow from '../../common/icons/Arrow.jsx';
import CardField from './CardField';

const Section = styled.section`
  ${sectionMixin}
  ${cardMixin}
  box-shadow: ${colors.cardBoxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  line-height: 1.2rem;
  margin-bottom: 1rem;
`;

const CenterLink = styled(Link)`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardSection = ({
  fileName = '3', age = '3', gender = 'male', trials = '0',
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
      <CardField confirmState={trials !== '0'}>
        {trials}
      </CardField>
      <CardField flexGrow="2">
        <CenterLink to="">
          View more details
            <Arrow width="40" />
        </CenterLink>
      </CardField>
    </Section>
);

export default CardSection;
