import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import Breadcrumb from '../atoms/Breadcrumb';
import BreadcrumbItem from '../atoms/BreadcrumbItem';
import { EmotionComponentProps } from '../types/EmotionComponentProps';

const HeaderBreadcrumbs: React.FC<EmotionComponentProps> = ({ className }) => {
  const router = useRouter();
  const paths = useMemo(
    () => router.asPath.split('/').filter((p) => !!p),
    [router.asPath]
  );

  return (
    <Breadcrumb className={className}>
      <BreadcrumbItem
        className={className}
        onClick={() => {
          router.push('/');
        }}
      >
        Home
      </BreadcrumbItem>

      {paths.map((path, i) => (
        <React.Fragment key={path}>
          <BreadcrumbItem
            className={className}
            onClick={() => {
              router.push(`/${paths.slice(0, i + 1).join('/')}`);
            }}
            css={{ textTransform: 'capitalize' }}
          >
            {path.replaceAll('_', ' ').replaceAll('-', ' ')}
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </Breadcrumb>
  );
};

export default HeaderBreadcrumbs;
