"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import classNames from "classnames";
import styles from "./AdminNavLink.module.css";
import Image from "next/image";

interface AdminNavLinkProps {
  href: string;
  src: string;
  label: string;
  style?: CSSProperties;
}

const AdminNavLink: FC<AdminNavLinkProps> = ({ href, src, label, ...rest }) => {
  const pathname = usePathname();

  const regex = `\\b${href.at(0) === "/" ? href.slice(1) : href}\/?\\b`;

  const isActive = href && new RegExp(regex).test(pathname);

  const linkClassName = classNames(styles.link, isActive && styles.active);

  return (
    <Link href={href} className={linkClassName} {...rest}>
      <Image src={src} alt={label} />
      <h6 className={styles.label}>{label}</h6>
    </Link>
  );
};

export default AdminNavLink;
