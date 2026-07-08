import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Kshaunish Harsha",
  description:
    "Applied AI engineer building agentic systems, RAG platforms, and production LLM pipelines — end to end.",
  openGraph: {
    title: "Kshaunish Harsha",
    description:
      "Applied AI engineer building agentic systems, RAG platforms, and production LLM pipelines — end to end.",
    siteName: "Kshaunish Harsha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kshaun_py",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${pressStart.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
