import React from 'react';
import styled from 'styled-components';
import { breakpoint, colors } from '../../../styles/globalStyles';
import { sectionMixin, cardMixin } from '../../common/Layout';
// using a button as we don't want a route for the trial result
// > this data won't be sharable with a url, and will get lost when the user refreshes their screen
// > therefore, no need
import { IconButton } from '../../common/Buttons';

import Arrow from '../../common/icons/Arrow';
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

const TrialButton = styled(IconButton)`
  font-weight: 700;
  @media only screen and (min-width: ${breakpoint.small}) {
    padding: 0.8rem 1.6rem;
  }
`;


// todo:
// - mobile layout
const CardSection = ({
  fileName = '3',
  age = '3',
  gender = 'male',
  trials = '0',
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
    <CardField confirmState={trials !== '0'}>{trials}</CardField>
    <CardField>
      <TrialButton isClear iconRight>
        <Arrow width={40} />
        View more details
      </TrialButton>
    </CardField>
  </Section>
);

export default CardSection;
