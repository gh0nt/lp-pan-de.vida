"use client";

import { Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("mission.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("mission.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("mission.faithLove")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission.faithLoveDesc")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("mission.community")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission.communityDesc")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-passion/20 hover:border-passion transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-passion/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-passion" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("mission.education")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission.educationDesc")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("mission.vision")}
              </h3>
              <p className="text-foreground leading-relaxed">
                {t("mission.visionDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("mission.values")}
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("mission.value1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("mission.value2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("mission.value3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{t("mission.value4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
