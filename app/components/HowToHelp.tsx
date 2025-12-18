"use client";

import { Heart, HandHeart, Handshake, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useLanguage } from "@/app/contexts/LanguageContext";

const HowToHelp = () => {
  const { t } = useLanguage();

  return (
    <section
      id="ayudar"
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("howToHelp.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("howToHelp.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-hope/30 hover:border-hope transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-hope" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("howToHelp.donate")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("howToHelp.donateDesc")}
              </p>
              <Button
                className="bg-hope text-hope-foreground hover:bg-hope/90 w-full"
                onClick={() =>
                  document
                    .getElementById("donar")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("howToHelp.donateNow")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("howToHelp.volunteer")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("howToHelp.volunteerDesc")}
              </p>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 w-full"
              >
                {t("howToHelp.volunteerBtn")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("howToHelp.partnerships")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("howToHelp.partnershipsDesc")}
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full"
              >
                {t("howToHelp.partnershipsBtn")}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {t("howToHelp.otherWays")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way3")}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way4")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way5")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>{t("howToHelp.way6")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="donar"
          className="mt-16 bg-gradient-to-r from-hope/10 via-accent/10 to-hope/10 rounded-2xl p-8 md:p-12 border border-hope/20"
        >
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">
            {t("howToHelp.donationInfo")}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow">
              <h4 className="font-bold text-primary mb-4 text-lg">
                {t("howToHelp.bankData")}
              </h4>
              <div className="space-y-3 text-foreground">
                <p>
                  <strong>{t("howToHelp.bank")}</strong> BANCOLOMBIA
                </p>
                <p>
                  <strong>{t("howToHelp.accountType")}</strong> Ahorros
                </p>
                <p>
                  <strong>{t("howToHelp.accountNumber")}</strong> 733-000033-07
                </p>
                <p>
                  <strong>{t("howToHelp.holder")}</strong> Fundación El
                  Verdadero Pan de Vida
                </p>
                <p>
                  <strong>{t("howToHelp.nit")}</strong> 901879752-1
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow">
              <h4 className="font-bold text-primary mb-4 text-lg">
                {t("howToHelp.contact")}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    contacto@pandevida.org
                  </span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">+57 3147773630</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    La Unión, Valle del Cauca, Colombia
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            {t("howToHelp.taxDeductible")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
