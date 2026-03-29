import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protocol — Peptide & Wellness Tracker",
  description:
    "The most complete personal peptide and wellness tracking app. Built for serious biohackers who demand precision, privacy, and data they actually own.",
  metadataBase: new URL("https://protocolapp.health"),
  openGraph: {
    title: "Protocol — Peptide & Wellness Tracker",
    description:
      "Track every dose, own your rotation, see your progress. Your data never leaves your phone.",
    url: "https://protocolapp.health",
    siteName: "Protocol",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Protocol — Peptide & Wellness Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocol — Peptide & Wellness Tracker",
    description:
      "Track every dose, own your rotation, see your progress. Your data never leaves your phone.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
