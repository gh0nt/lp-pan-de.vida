"use client";

import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-passion/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-passion" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">
            {t("problem.title")}
          </h2>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>{t("problem.intro")}</p>

            <div className="bg-card border-l-4 border-passion p-6 rounded-r-lg">
              <p className="font-semibold text-passion mb-3">
                {t("problem.subtitle")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>{t("problem.point1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>{t("problem.point2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>{t("problem.point3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>{t("problem.point4")}</span>
                </li>
              </ul>
            </div>

            <p>{t("problem.conclusion")}</p>

            <div className="bg-gradient-to-r from-hope/10 to-accent/10 p-6 rounded-lg border border-hope/20">
              <p className="text-center text-xl font-semibold text-primary">
                {t("problem.verse")}
                <span className="block text-base text-muted-foreground mt-2">
                  {t("problem.verseRef")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
