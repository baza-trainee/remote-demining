import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ДП НДЦ «Георесурс» | Наукова діяльність",
  description:
    "Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами",
};

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
