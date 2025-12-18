"use client";

import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import escalandoImage from "@/app/assets/escalando-peldanos.jpg";
import { useLanguage } from "@/app/contexts/LanguageContext";

const EscalandoPeldanos = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-hope/10 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-8 h-8 text-hope" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                {t("escalando.title")}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {t("escalando.description")}
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              {t("escalando.description2")}
            </p>
          </div>
          <div className="relative">
            <img
              src={escalandoImage.src}
              alt="Programa Escalando Peldaños"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-hope text-hope-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-bold text-lg mb-1">{t("escalando.badge1")}</p>
              <p className="text-sm">{t("escalando.badge2")}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-hope/30 hover:border-hope transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-12 h-12 bg-hope/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-hope" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t("escalando.objectives")}
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>{t("escalando.obj1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>{t("escalando.obj2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>{t("escalando.obj3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>{t("escalando.obj4")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/30 hover:border-accent transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t("escalando.components")}
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("escalando.comp1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("escalando.comp2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("escalando.comp3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("escalando.comp4")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/30 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t("escalando.results")}
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t("escalando.res1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t("escalando.res2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t("escalando.res3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t("escalando.res4")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EscalandoPeldanos;
