import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liqtrade - Financement professionnel à court terme",
  description: "Liqtrade vous accompagne dans vos besoins de financement professionnel à court terme avec des solutions simples, efficaces et compétitives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
