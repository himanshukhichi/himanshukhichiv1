import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshukhichi.dev"),
  title: "Himanshu Khichi",
  description:
    "Backend and Platform Engineer working on ML platform systems, model serving, SaaS migration, and distributed backend services.",
  openGraph: {
    title: "Himanshu Khichi",
    description:
      "Backend and Platform Engineer working on ML platform systems, model serving, SaaS migration, and distributed backend services.",
    type: "website",
    images: ["/assets/hk-monogram.png"]
  },
  icons: {
    icon: "/assets/hk-monogram.png",
    apple: "/assets/hk-monogram.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
