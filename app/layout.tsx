'use client'
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
      <Script src="/sakura.js"></Script>
    </html>
  );
}
