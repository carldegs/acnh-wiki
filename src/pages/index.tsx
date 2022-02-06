import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Container from '../atoms/Container';
import IconButton from '../atoms/IconButton';
import GROUP_DATA from '../constants/groupData';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>ACNH Wiki</title>
        <meta
          name="description"
          content="Wiki for the game Animal Crossing: New Horizons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <h1 css={{ marginBottom: '24px' }}>ACNH Wiki</h1>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '100%',
            maxWidth: '400px',
            gap: '20px',
          }}
        >
          {GROUP_DATA.map(({ icon, name, id, bg }) => (
            <div
              key={id}
              css={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <IconButton
                _css={{
                  background: bg,
                }}
                icon={
                  <Image src={icon} alt={`${id}-button`} layout="responsive" />
                }
                href={`/${id}`}
              />
              <p css={{ marginTop: '8px' }}>{name}</p>
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default Home;
