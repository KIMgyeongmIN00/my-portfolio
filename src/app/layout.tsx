import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Introduce ME!",
  description: "프론트엔드 개발자 김경민입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
