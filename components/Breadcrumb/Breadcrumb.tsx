import Link from "next/link";
import { FC, ReactNode } from "react";

import styles from "./Breadcrumb.module.css";

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
            <div key={i}>
              <Link href={crumb.path} className={styles.link}>
                {crumb.label}
              </Link>
              {!isLastItem && <span className={styles.separator}> &gt; </span>}
            </div>
          );
        } else {
          return (
            <div key={i}>
              <p>{crumb.label}</p>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Breadcrumb;
