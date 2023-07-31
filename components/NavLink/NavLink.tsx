import Link from "next/link";

import styles from "./NavLink.module.css";

interface NavLinkPropsType {
  children: string;
  href: string;
  isActive?: boolean;
  isButton?: boolean;
  isFullWidth?: boolean;
  isMoreInfo?: boolean;
}

const NavLink: React.FC<NavLinkPropsType> = ({
  href,
  children,
  isActive,
  isButton,
  isFullWidth,
  isMoreInfo,
}: NavLinkPropsType) => {
  const styledLink = `${styles.link} ${isActive && styles.active} ${
    isButton && styles.link_btn
  } ${isFullWidth && styles.fullWidth} ${isMoreInfo && styles.moreInfo_btn}`;

  return (
    <Link className={styledLink} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
