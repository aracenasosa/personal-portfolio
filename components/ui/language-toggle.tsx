"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

const SHOW_LANGUAGE_TOGGLE = false;

export function LanguageToggle() {
  const { language, toggleLanguage, mounted } = useLanguage();

  if (!SHOW_LANGUAGE_TOGGLE) {
    return null;
  }

  if (!mounted) {
    return <div className="w-[72px] h-[36px] rounded-full bg-secondary" />;
  }

  const isSpanish = language === "es";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      role="switch"
      aria-checked={isSpanish}
      aria-label={`Switch language to ${isSpanish ? "English" : "Spanish"}`}
      className="relative flex w-[72px] h-[36px] rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out border border-border bg-white dark:bg-black shadow-sm dark:shadow-none"
    >
      <div className="absolute inset-0 flex items-center justify-between px-2.5 text-[11px] font-bold">
        <span
          className={`transition-opacity ${
            isSpanish
              ? "text-muted-foreground/50 dark:text-white/35 opacity-100"
              : "opacity-0"
          }`}
        >
          EN
        </span>
        <span
          className={`transition-opacity ${
            isSpanish
              ? "opacity-0"
              : "text-muted-foreground/50 dark:text-white/35 opacity-100"
          }`}
        >
          ES
        </span>
      </div>

      <motion.div
        className="absolute top-1 w-[26px] h-[26px] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-10"
        initial={false}
        animate={{
          left: isSpanish ? "calc(100% - 30px)" : "4px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{ backgroundColor: "rgb(47,55,146)" }}
      >
        {language.toUpperCase()}
      </motion.div>
    </button>
  );
}
