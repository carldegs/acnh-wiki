import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Container from '../../atoms/Container';
import ScrollToTopButton from '../../atoms/ScrollToTopButton';
import Spinner from '../../atoms/Spinner';
import GROUP_DATA from '../../constants/groupData';
import useCustomTheme from '../../hooks/useCustomTheme';
import { useQueryList } from '../../modules/queries';
import Header from '../../organisms/Header';
import BaseItem from '../../types/BaseItem';
import Group from '../../types/Group';
import { BLUR_DATA_URL } from '../../utils/blurDataURL';

const GroupPage: React.FC = () => {
  const { mq } = useCustomTheme();
  const router = useRouter();

  const { group } = router?.query || {}; // TODO: Check if valid group
  const { data, isLoading } = useQueryList(group as Group, {
    onError: (err) => {
      if (err?.response?.status === 404) {
        router.push('/404');
      }
    },
  });

  const headerTitle = useMemo(() => {
    const groupData = GROUP_DATA.find(({ id }) => id === group);
    return groupData?.name || '';
  }, [group]);
  const groupedData = useMemo(() => {
    if (!data) {
      return [];
    }

    const sortedData = data.sort((a, b) => {
      const nameA = a.name.nameUSen.toLowerCase();
      const nameB = b.name.nameUSen.toLowerCase();
      return nameA > nameB ? 1 : nameB > nameA ? -1 : 0;
    });

    const reducedData = sortedData.reduce<{
      [x: string]: { letter: string; children: BaseItem[] };
    }>((groupedObj, item) => {
      const letter = item.name.nameUSen[0].toUpperCase();

      if (!groupedObj[letter]) {
        groupedObj = {
          ...groupedObj,
          [letter]: {
            letter,
            children: [item],
          },
        };
      } else {
        groupedObj = {
          ...groupedObj,
          [letter]: {
            ...groupedObj[letter],
            children: [...groupedObj[letter].children, item],
          },
        };
      }

      return groupedObj;
    }, {});

    return Object.values(reducedData);
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <ScrollToTopButton />
      <Header>{headerTitle}</Header>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        {groupedData?.map(({ letter, children }) => (
          <div key={`group-${letter}`}>
            <h1
              css={{
                margin: '22px 0 0 20px',
                textTransform: 'uppercase',
              }}
            >
              {letter}
            </h1>
            <div
              css={mq({
                display: 'grid',
                gridTemplateColumns: [1, 2, 3].map((n) => `repeat(${n}, 1fr)`),
              })}
            >
              {children.map(({ fileName, name, imageUri, iconUri }) => (
                <Link
                  href={`/${encodeURIComponent(
                    group as string
                  )}/${encodeURIComponent(fileName as string)}`}
                  key={fileName}
                >
                  <div
                    css={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 12px',
                      borderRadius: 8,
                      cursor: 'pointer',
                      '&:hover': {
                        background: theme.colors.teal,
                      },
                    })}
                    data-testid={`button-${name['nameUSen']}`}
                  >
                    <Image
                      src={iconUri || imageUri}
                      height="50"
                      width="50"
                      placeholder="blur"
                      alt={name.nameUSen}
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <p
                      css={{
                        cursor: 'pointer',
                        marginLeft: '20px',
                        textTransform: 'capitalize',
                      }}
                    >
                      {name['nameUSen']}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GroupPage;
