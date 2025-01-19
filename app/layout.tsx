import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tournament",
  description: "Technical assignment for a tennis tournament",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
