import type { Metadata } from "next";
import { Inter, Lora, Montserrat, Kalam } from "next/font/google";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Octron",
  description: "NAVR (NeuroAdaptive VR Therapy) integrates immersive Virtual Reality with real-time biofeedback and AI to provide objective, personalized mental health diagnostics for ADHD and anxiety disorders.",
  keywords: ["mental health", "VR therapy", "ADHD", "anxiety", "biofeedback", "AI", "neurotechnology"],
  authors: [{ name: "Octron" }],
  icons: {
    icon: "/o-logo.png",
    apple: "/o-logo.png",
    shortcut: "/o-logo.png",
  },
  openGraph: {
    title: "Octron",
    description: "NAVR (NeuroAdaptive VR Therapy) integrates immersive Virtual Reality with real-time biofeedback and AI to provide objective, personalized mental health diagnostics for ADHD and anxiety disorders.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octron",
    description: "NAVR (NeuroAdaptive VR Therapy) integrates immersive Virtual Reality with real-time biofeedback and AI to provide objective, personalized mental health diagnostics for ADHD and anxiety disorders.",
  },
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
    <html lang="en" className={`${inter.variable} ${lora.variable} ${montserrat.variable} ${kalam.variable}`}>
      <head>
        <link rel="icon" href="/o-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/o-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/o-logo.png" type="image/png" />
        <script 
          src="https://platform.linkedin.com/badges/js/profile.js" 
          async 
          defer 
          type="text/javascript"
        />
      </head>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}