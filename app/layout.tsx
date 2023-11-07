import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "RECSAI",
  openGraph: {
    title: "RECSAI",
    images: ["/logos/recsai-small.png"],
    description:
      "The International Expert Consortium on the Regulation, Economics and Computer Science of AI (RECSAI) aims to provide a platform to facilitate such cross-disciplinary enquiries.",
  },
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/logos/recsai-small.png",
    shortcut: "/logos/recsai-small.png",
    apple: "/logos/recsai-small.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logos/recsai-small.png",
    },
  },
  description:
    "The International Expert Consortium on the Regulation, Economics and Computer Science of AI (RECSAI) aims to provide a platform to facilitate such cross-disciplinary enquiries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
