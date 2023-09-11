import type { Metadata } from "next";

import Container from "@/components/Container/Container";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "",
  description: "",
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container style={styles.container}>{children}</Container>;
}
