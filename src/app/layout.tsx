import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Younas Salik Wedding Celebration",
  description:
    "A beautifully animated wedding website for the celebration of Younas Salik's daughter and Anoosh Farahd from 14-16 May.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
