import { CalendarCheck, Clock, MapTrifold, StarFour } from 'phosphor-react';
import React from 'react';

import InfoGrid from '../atoms/InfoGrid';
import SectionHeader from '../atoms/SectionHeader';
import SubSectionHeader from '../atoms/SubSectionHeader';
import { SeasonalItem } from '../types/BaseItem';
import { EmotionComponentProps } from '../types/EmotionComponentProps';
import { getMonthRange } from '../utils/date';

interface AvailabilityInfoProps extends EmotionComponentProps {
  availability: SeasonalItem['availability'];
}

const AvailabilityInfo: React.FC<AvailabilityInfoProps> = ({
  className,
  availability: {
    monthNorthern,
    monthSouthern, // '11-3'
    time, // '9am - 4pm'
    isAllDay,
    isAllYear,
    location,
    rarity,
  },
}) => {
  return (
    <div
      className={className}
      css={{
        borderRadius: '20% / 30%',
      }}
    >
      <SectionHeader>Availability</SectionHeader>

      <InfoGrid>
        <div>
          <SubSectionHeader icon={CalendarCheck}>Season</SubSectionHeader>

          <p css={{ margin: 0 }}>
            <b>Northern Hemisphere:</b>{' '}
          </p>

          {isAllYear
            ? 'All Year'
            : getMonthRange(monthNorthern).map((range) => (
                <p css={{ margin: 0 }} key={`north-${range}`}>
                  {range}
                </p>
              ))}

          <p css={{ margin: 0, marginTop: '12px' }}>
            <b>Southern Hemisphere:</b>{' '}
          </p>
          {isAllYear
            ? 'All Year'
            : getMonthRange(monthSouthern).map((range) => (
                <p css={{ margin: 0 }} key={`south-${range}`}>
                  {range}
                </p>
              ))}
        </div>

        <div>
          <SubSectionHeader icon={Clock}>Time</SubSectionHeader>
          <p css={{ margin: 0 }}>
            <b>Time:</b> {isAllDay ? 'All Day' : time}
          </p>
        </div>

        <div>
          <SubSectionHeader icon={MapTrifold}>Location</SubSectionHeader>
          <p css={{ margin: 0 }}>{location}</p>
        </div>

        <div>
          <SubSectionHeader icon={StarFour}>Rarity</SubSectionHeader>
          <p css={{ margin: 0 }}>{rarity}</p>
        </div>
      </InfoGrid>
    </div>
  );
};

export default AvailabilityInfo;
