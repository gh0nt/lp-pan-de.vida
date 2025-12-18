"use client";

import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Impact = () => {
  const { t } = useLanguage();

  const stats = [
    {
      number: "36+",
      label: t("impact.stat1"),
      description: t("impact.stat1Desc"),
    },
    {
      number: "60+",
      label: t("impact.stat2"),
      description: t("impact.stat2Desc"),
    },
    {
      number: "12%",
      label: t("impact.stat3"),
      description: t("impact.stat3Desc"),
    },
    {
      number: "5 años",
      label: t("impact.stat4"),
      description: t("impact.stat4Desc"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("impact.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("impact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-8 text-center">
                <div className="text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80 backdrop-blur">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("impact.stories")}
              </h3>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-accent pl-4">
                  <p className="italic mb-2">{t("impact.testimony1")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("impact.testimony1Author")}
                  </p>
                </div>
                <div className="border-l-4 border-hope pl-4">
                  <p className="italic mb-2">{t("impact.testimony2")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("impact.testimony2Author")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("impact.activities")}
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity4")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity5")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("impact.activity6")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impact;
