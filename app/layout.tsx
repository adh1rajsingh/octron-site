import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Octron - Pioneering the Future of Mental Healthcare",
  description: "NAVR (NeuroAdaptive VR Therapy) integrates immersive Virtual Reality with real-time biofeedback and AI to provide objective, personalized mental health diagnostics for ADHD and anxiety disorders.",
  keywords: ["mental health", "VR therapy", "ADHD", "anxiety", "biofeedback", "AI", "neurotechnology"],
  authors: [{ name: "Octron" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}