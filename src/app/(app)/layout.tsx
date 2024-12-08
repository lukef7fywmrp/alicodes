import { DisableDraftButton } from "@/components/disable-draft-button";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn, portableTextToPlainText } from "@/lib/utils";
import { SanityLive } from "@/sanity/lib/live";
import { getAuthorData } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { Inter as FontSans } from "next/font/google";
import { draftMode } from "next/headers";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const author = await getAuthorData();

  if (!author) {
    return {
      title: "Portfolio",
      description: "Personal portfolio website",
    };
  }

  const url = process.env.NEXT_PUBLIC_BASE_URL!;

  return {
    metadataBase: new URL(url),
    title: {
      default: author.name ?? "",
      template: `%s | ${author.name}`,
    },
    description: portableTextToPlainText(author.description!),
    openGraph: {
      title: author.name ?? "",
      description: portableTextToPlainText(author.description!),
      url: url,
      siteName: author.name ?? "",
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: author.name ?? "",
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            {/* @ts-expect-error Server Component */}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        {isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftButton />
          </>
        )}
        <SanityLive />
      </body>
    </html>
  );
}
