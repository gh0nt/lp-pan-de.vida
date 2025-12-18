"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border">
      <Languages className="w-4 h-4 text-muted-foreground" />
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
