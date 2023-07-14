import Link from 'next/link';
import React from 'react'
import styles from './CustomLink.module.css';

interface CustomLinkPropsType {
  children: string;
  href: string;
  isFullWidth?: boolean;
}


const CustomLink: React.FC<CustomLinkPropsType> = ({children, href, isFullWidth}: CustomLinkPropsType) => {
  const styledLink = `${styles.custom_link} ${isFullWidth? styles.fullWidth : ""}`
  return (
    <Link className={styledLink} href={href}>{children}</Link>
  )
}

export default CustomLink;