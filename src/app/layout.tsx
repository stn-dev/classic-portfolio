import type { Metadata } from "next";
import "./globals.scss";

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
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
