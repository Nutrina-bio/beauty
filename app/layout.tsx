import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty | สกินแคร์และน้ำหอม สไตล์พาสเทล 199 บาท",
  description:
    "ครีมทาหน้าและน้ำหอมสีพาสเทลสุดน่ารัก เข้าถึงง่าย ชิ้นละ 199 บาท ทักไลน์สั่งได้เลย เปิด 24 ชั่วโมง",
  openGraph: {
    title: "Beauty | สกินแคร์และน้ำหอม สไตล์พาสเทล",
    description: "ครีมทาหน้าและน้ำหอมชิ้นละ 199 บาท ทักไลน์สั่งได้เลย",
    type: "website",
    locale: "th_TH",
    siteName: "Beauty",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffe0ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
