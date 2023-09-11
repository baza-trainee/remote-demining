import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ДП НДЦ «Георесурс» | Про нас",
  description:
    "Проводить тестування існуючої розробки та обладнання сучасної методики визначення місць знаходження вибухонебезпечних предметів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
