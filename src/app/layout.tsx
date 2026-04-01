import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anoosh Wedding",
  description:
    "A beautifully animated wedding website for Anoosh and Younas with ceremony details, invitations, and event schedule.",
  icons: {
    icon: "/seal.png",
    shortcut: "/seal.png",
    apple: "/seal.png",
  },
  openGraph: {
    title: "Anoosh Wedding",
    description:
      "A beautifully animated wedding website for Anoosh and Younas with ceremony details, invitations, and event schedule.",
    images: "/seal.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anoosh Wedding",
    description:
      "A beautifully animated wedding website for Anoosh and Younas with ceremony details, invitations, and event schedule.",
    images: "/seal.png",
  },
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
