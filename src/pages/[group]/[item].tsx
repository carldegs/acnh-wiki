import Image from 'next/image';
import { useRouter } from 'next/router';
import { CaretDoubleRight, CoinVertical } from 'phosphor-react';
import { useMemo } from 'react';

import Container from '../../atoms/Container';
import InfoGrid from '../../atoms/InfoGrid';
import SectionHeader from '../../atoms/SectionHeader';
import Spinner from '../../atoms/Spinner';
import SubSectionHeader from '../../atoms/SubSectionHeader';
import GROUP_DATA from '../../constants/groupData';
import useCustomTheme from '../../hooks/useCustomTheme';
import { useQueryItem } from '../../modules/queries';
import AvailabilityInfo from '../../organisms/AvailabilityInfo';
import Header from '../../organisms/Header';
import VillagerInfo from '../../organisms/VillagerInfo';
import { Art } from '../../types/Art';
import {
  BuyableItem,
  MuseumItem,
  SeasonalItem,
  SellableItem,
} from '../../types/BaseItem';
import { Bug } from '../../types/Bug';
import { Fish } from '../../types/Fish';
import Group, { GroupType } from '../../types/Group';
import { SeaCreature } from '../../types/SeaCreature';
import { Villager } from '../../types/Villager';
import { BLUR_DATA_URL } from '../../utils/blurDataURL';

const ItemPage: React.FC = () => {
  const router = useRouter();
  const { group, item } = (router?.query || {}) as {
    group: Group;
    item: string;
  }; // TODO: Check if valid group
  const { data, isLoading } = useQueryItem<GroupType[typeof group]>(
    group as Group,
    item as string,
    {
      onError: (err) => {
        if ((err as any)?.response?.status === 404) {
          router.push('/404');
        }
      },
    }
  );
  const { mq } = useCustomTheme();
  const groupData = useMemo(
    () => GROUP_DATA.find(({ id }) => id === group),
    [group]
  );

  if (isLoading || !data) {
    return <Spinner />;
  }

  const { name, imageUri, iconUri } = data;

  return (
    <Container>
      <Header css={{ color: 'white' }} />
      <div
        css={mq({
          width: '100%',
          height: ['300px', '400px'],
          borderBottomLeftRadius: ['60% 20%', '50% 30%'],
          borderBottomRightRadius: ['60% 20%', '50% 30%'],
          background: groupData?.bg,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <div
          css={mq({
            width: '100%',
            height: '100%',
            maxWidth: ['150px', '250px'],
            maxHeight: ['150px', '250px'],
            position: 'relative',
          })}
        >
          <Image
            src={iconUri || imageUri}
            layout="fill"
            placeholder="blur"
            alt={name.nameUSen}
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <h1
          css={{
            color: 'white',
            textTransform: 'capitalize',
            marginTop: '4px',
          }}
        >
          {name.nameUSen}
        </h1>
      </div>
      <div
        css={mq({
          marginTop: ['280px', '380px'],
          paddingLeft: ['12px', '32px'],
          paddingRight: ['12px', '32px'],
        })}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {[
            {
              name: 'Price',
              value: (data as SellableItem)?.price,
            },
            {
              name: 'Buy Price',
              value: (data as BuyableItem)?.buyPrice,
            },
            {
              name: 'Sale Price',
              value: (data as BuyableItem)?.sellPrice,
            },
            {
              name: 'Price w/ Flick',
              value: (data as Bug)?.priceFlick,
            },
            {
              name: 'Price w/ CJ',
              value: (data as Fish)?.priceCj,
            },
          ]
            .filter(({ value }) => value)
            .map(({ name, value }) => (
              <div
                css={(theme) => ({
                  display: 'flex',
                  justifyContent: 'center',
                  background: theme.colors.green,
                  padding: '12px 24px',
                  borderRadius: '12px',
                  flexDirection: 'column',
                  marginRight: '12px',
                })}
                key={`${name}-${value}`}
              >
                <p css={{ fontSize: '16px', margin: '0 0 8px 0' }}>
                  <b>{name}</b>
                </p>
                <div
                  css={{
                    display: 'flex',
                  }}
                >
                  <CoinVertical
                    size={26}
                    weight="bold"
                    css={{ marginTop: '-2px' }}
                  />
                  <div css={{ marginLeft: '4px', fontSize: '20px' }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {((data as MuseumItem)?.museumPhrase || (data as Art)?.museumDesc) && (
          <>
            <SectionHeader>Museum Description</SectionHeader>
            <p>
              {(data as MuseumItem).museumPhrase || (data as Art).museumDesc}
            </p>
          </>
        )}

        {(data as Art)?.museumDesc && (
          <p>
            <b>Has Fake?</b> {(data as Art).hasFake ? 'Yes' : 'No'}
          </p>
        )}

        {(data as Villager)?.personality ? (
          <VillagerInfo villager={data as Villager} />
        ) : (data as Villager)?.catchPhrase ? (
          <>
            <SectionHeader>Catchphrase</SectionHeader>
            <p>{(data as Villager).catchPhrase}</p>
          </>
        ) : null}

        {(data as SeasonalItem)?.availability && (
          <AvailabilityInfo
            availability={(data as SeasonalItem).availability}
          />
        )}

        {(data as SeaCreature)?.speed && (
          <>
            <SectionHeader>Other Information</SectionHeader>
            <InfoGrid>
              <div>
                <SubSectionHeader icon={CaretDoubleRight}>
                  Speed
                </SubSectionHeader>
                <p css={{ margin: 0 }}>{(data as SeaCreature)?.speed}</p>
              </div>
            </InfoGrid>
          </>
        )}

        {imageUri && (
          <>
            <SectionHeader>Other Images</SectionHeader>
            <div css={{ display: 'flex' }}>
              {iconUri && (
                <>
                  <Image
                    src={iconUri}
                    width="150px"
                    height="150px"
                    placeholder="blur"
                    alt={name.nameUSen}
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div css={{ width: '16px' }} />
                </>
              )}
              <Image
                src={imageUri}
                width="150px"
                height="150px"
                placeholder="blur"
                alt={name.nameUSen}
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default ItemPage;
