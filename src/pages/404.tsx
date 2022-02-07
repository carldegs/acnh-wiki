import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '../../public/shocked.png';

export default function Custom404() {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '95vh',
      }}
    >
      <Image src={HeroImage} />
      <h1>Page Not Found!</h1>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
