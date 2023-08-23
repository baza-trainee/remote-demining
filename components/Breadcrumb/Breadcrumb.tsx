import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './Breadcrumb.module.css';

export type CrumbItem = {
  label: ReactNode;
  path: string;
};
export type BreadcrumbProps = {
  items: CrumbItem[];
};

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className={styles.breadcrumb}>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              <Link href={crumb.path} key={i} className={styles.link}>
                {crumb.label}
              </Link>
              <span className={styles.separator}> &gt; </span>
            </>
          );
        } else {
          return crumb.label;
        }
      })}
    </div>
  );
};
export default Breadcrumb;
