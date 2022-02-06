import {
  CalendarBlank,
  GameController,
  GenderIntersex,
  PawPrint,
  SmileyWink,
} from 'phosphor-react';
import React from 'react';

import InfoGrid from '../atoms/InfoGrid';
import SectionHeader from '../atoms/SectionHeader';
import SubSectionHeader from '../atoms/SubSectionHeader';
import useCustomTheme from '../hooks/useCustomTheme';
import { EmotionComponentProps } from '../types/EmotionComponentProps';
import { Villager } from '../types/Villager';

interface VillagerInfoProps extends EmotionComponentProps {
  villager: Villager;
}

const VillagerInfo: React.FC<VillagerInfoProps> = ({
  villager: {
    personality,
    birthdayString,
    species,
    gender,
    catchPhrase,
    saying,
    textColor,
    bubbleColor,
    hobby,
  },
}) => {
  const { mq } = useCustomTheme();
  return (
    <div>
      <SectionHeader>Villager Information</SectionHeader>
      <InfoGrid>
        <div>
          <SubSectionHeader icon={CalendarBlank}>Birthday</SubSectionHeader>
          {birthdayString}
        </div>
        <div>
          <SubSectionHeader icon={PawPrint}>Species</SubSectionHeader>
          {species}
        </div>
        <div>
          <SubSectionHeader icon={GenderIntersex}>Gender</SubSectionHeader>
          {gender}
        </div>
        <div>
          <SubSectionHeader icon={SmileyWink}>Personality</SubSectionHeader>
          {personality}
        </div>
        <div>
          <SubSectionHeader icon={GameController}>Hobby</SubSectionHeader>
          {hobby}
        </div>
      </InfoGrid>
      <SectionHeader>Catchphrases</SectionHeader>
      {[catchPhrase, saying].map((str) => (
        <div
          key={str}
          css={mq({
            background: bubbleColor,
            padding: '2px 20px',
            borderRadius: 24,
            margin: '12px 0',
            display: 'flex',
            flexDirection: ['column', 'row'],
          })}
        >
          <p
            css={{
              fontSize: '20px',
              color: textColor,
              width: 'fit-content',
              flexGrow: 1,
            }}
          >
            <b>&quot;</b>
            <i>{str}</i>
            <b>&quot;</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default VillagerInfo;
