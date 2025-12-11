import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Carlos Aracena - Portfolio",
    description: "Personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
