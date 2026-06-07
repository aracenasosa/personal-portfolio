"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
      {dictionary.footer}
    </footer>
  );
}
