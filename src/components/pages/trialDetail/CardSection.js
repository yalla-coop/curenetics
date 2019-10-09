import React from 'react';
import styled from 'styled-components';
import { breakpoint, colors, font } from '../../../styles/globalStyles';

import { sectionMixin, cardMixin } from '../../common/Layout';
import { IconButton } from '../../common/Buttons';
import { Label } from '../../common/Forms';
import { Span } from '../../common/Typography';

import Arrow from '../../common/icons/Arrow';

const TrialCard = styled.section`
  ${sectionMixin}
  ${cardMixin}
  box-shadow: ${colors.boxShadow};
  border-bottom: 0.25rem solid ${colors.lightPrimary};
  text-align: left;
  margin-bottom: 1rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

const CardField = styled.div`
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  &:nth-child(1) {
    margin-top: 0;
  }
  &:last-of-type {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 0;
    margin-left: 0.5rem;
    &:nth-child(1) {
      margin-left: 0;
    }
    flex: ${({ isWide }) => (isWide ? 2 : 1)};
    flex-direction: ${({ isWide }) => (isWide ? 'row' : 'column')};
    ${({ isWide }) => (isWide ? 'align-items: center' : '')};
  }
`;

const TrialSpan = styled(Span)`
  ${({ isLarge }) => (isLarge ? `
  margin-left: 0.5rem;
  font-size: ${font.large};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.Xlarge};
  }
  ` : ``)};
  color: ${({ showColor }) => showColor || colors.black};
`;

const TrialButton = styled(IconButton)`
  font-weight: 700;
  padding: 0.8rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    padding: 0;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

const CardSection = ({ data }) => {
  const { fileName, age, gender, trials } = data;

  return (
    <TrialCard>
      <CardField>
        <Label>File name:</Label>
        <TrialSpan>{fileName}</TrialSpan>
      </CardField>
      <CardField>
        <Label>Age:</Label>
        <TrialSpan>{age}</TrialSpan>
      </CardField>
      <CardField>
        <Label>Gender:</Label>
        <TrialSpan>{gender}</TrialSpan>
      </CardField>
      <CardField isWide>
        <Label>Potentially Eligible Trials:</Label>
        <TrialSpan
          showColor={trials === 0 ? colors.cancel : colors.confirm}
          isLarge
        >
          {trials}
        </TrialSpan>
      </CardField>
      <CardField isWide>
        <TrialButton isClear iconRight>
          <Arrow width={40} />
          View more details
        </TrialButton>
      </CardField>
    </TrialCard>
  );
}

export default CardSection;
