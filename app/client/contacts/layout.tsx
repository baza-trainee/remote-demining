import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ДП НДЦ «Георесурс» | Контакти",
  description: "Зворотний зв'язок",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
