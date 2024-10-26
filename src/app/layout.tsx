import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import ClientLayout from './ClientLayout'
import "./css/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Absensi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={manrope.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}