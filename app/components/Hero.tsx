"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/app/assets/hero-community.jpg";
import logo from "@/app/assets/logo.png";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <img
            src={logo.src}
            alt="Fundación El Verdadero Pan de Vida"
            className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t("hero.title1")}
            <br />
            <span className="text-hope">{t("hero.title2")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("donar")}
              className="bg-hope text-hope-foreground hover:bg-hope/90 text-lg px-8 py-6 shadow-2xl"
            >
              {t("hero.donateNow")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("ayudar")}
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 text-lg px-8 py-6"
            >
              {t("hero.howToHelp")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
