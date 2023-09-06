import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ДП НДЦ «Георесурс» | Дистанційне розмінування",
  description:
    "Проєкт SOCRAT, Дистанційне знаходження вибухонебезпечних предметів",
};

export default function SocratLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
