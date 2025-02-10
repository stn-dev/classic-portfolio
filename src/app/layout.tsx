import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "stn | portfolio",
  description: "This is my personal portfolio as a front-end developer , you can see a part of my world, my skills and contact me directly here",
  openGraph: {
    title: "stn dev portfolio",
    description: 'This is my personal portfolio as a front-end developer , you can see a part of my world, my skills and contact me directly here',
    url: "http://stn-portfolio.vercel.app",
    type: "website",
    locale: "mg-MADAGASCAR",
    siteName: "stn-dev",
    images: [
      {
        url: 'http://stn-portfolio.vercel.app/image/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: "home section image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "stn | portfolio",
    description: "This is my personal portfolio as a front-end developer , you can see a part of my world, my skills and contact me directly here",
    images: ["http://stn-portfolio.vercel.app/image/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Viga&family=Zen+Loop:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
