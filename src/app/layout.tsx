import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "stn dev portfolio",
  description: "This is my personal portfolio as a front-end developer",
  openGraph: {
    title: "stn dev portfolio",
    description: 'This is my personal portfolio as a front-end developer',
    url: "http://stn-dev-portfolio.vercel.app",
    type: "website",
    locale: "mg-MADAGASCAR",
    siteName: "stn dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
