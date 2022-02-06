import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Container from '../../atoms/Container';
import GROUP_DATA from '../../constants/groupData';
import useCustomTheme from '../../hooks/useCustomTheme';
import { useQueryItem } from '../../modules/queries';
import Group from '../../types/Group';
import { BLUR_DATA_URL } from '../../utils/blurDataURL';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { group, item } = query;

  if (!group || !Object.values(Group).includes(group as Group) || !item) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

const GroupPage: React.FC = () => {
  const { query } = useRouter();
  const { group, item } = query || {}; // TODO: Check if valid group
  const { data, isLoading } = useQueryItem(group as Group, item as string);
  const { mq } = useCustomTheme();
  const groupData = useMemo(
    () => GROUP_DATA.find(({ id }) => id === group),
    [group]
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const { name, imageUri, iconUri } = data;

  return (
    <Container>
      <div
        css={mq({
          width: '100%',
          height: ['250px', '400px'],
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
        <h1 css={{ color: 'white' }}>{name.nameUSen}</h1>
      </div>
      {/* <text css={{ cursor: 'pointer' }}>{JSON.stringify(data)}</text> */}
    </Container>
  );
};

export default GroupPage;
