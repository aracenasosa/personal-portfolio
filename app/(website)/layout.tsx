import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "react-loading-skeleton/dist/skeleton.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="portfolio-theme"
        disableTransitionOnChange
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </ThemeProvider>
    </div>
  );
}
