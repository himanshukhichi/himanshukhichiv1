import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshukhichi.vercel.app"),
  title: "Himanshu Khichi | Backend Software Engineer",
  description:
    "Backend Software Engineer with 5 years building distributed systems and ML infrastructure. Java, Spring Boot, Kafka, Redis, gRPC, PostgreSQL.",
  alternates: {
    canonical: "https://himanshukhichi.vercel.app"
  },
  openGraph: {
    title: "Himanshu Khichi — Backend Software Engineer",
    description:
      "Backend Software Engineer with 5 years building distributed systems and ML infrastructure. Java, Spring Boot, Kafka, Redis, gRPC, PostgreSQL.",
    type: "website",
    url: "https://himanshukhichi.vercel.app",
    images: ["https://himanshukhichi.vercel.app/assets/hk-monogram.png"]
  },
  twitter: {
    card: "summary",
    title: "Himanshu Khichi — Backend Software Engineer",
    description:
      "Backend Software Engineer with 5 years building distributed systems and ML infrastructure. Java, Spring Boot, Kafka, Redis, gRPC, PostgreSQL.",
    images: ["https://himanshukhichi.vercel.app/assets/hk-monogram.png"]
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
