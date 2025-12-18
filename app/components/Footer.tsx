"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Heart } from "lucide-react";
import logo from "@/app/assets/logo.png";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <img
              src={logo.src}
              alt="Fundación El Verdadero Pan de Vida"
              className="w-24 h-24 mb-4"
            />
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/p/1DSyWkYRV1/"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-hope/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fundacionelverdaderopandevida?igsh=Z2UwMDRhM3JpZHEx"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-hope/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-hope">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-hope transition-colors">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hope transition-colors">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hope transition-colors">
                  {t("footer.programs")}
                </a>
              </li>
              <li>
                <a href="#ayudar" className="hover:text-hope transition-colors">
                  {t("footer.howToHelp")}
                </a>
              </li>
              <li>
                <a href="#donar" className="hover:text-hope transition-colors">
                  {t("footer.donate")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-hope">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-hope" />
                <span>
                  La Unión, Valle del Cauca
                  <br />
                  Colombia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-hope" />
                <span>+57 3147773630</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-hope" />
                <span>contacto@pandevida.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Información Legal */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-foreground/70 mb-6">
            <div>
              <p>
                <strong className="text-primary-foreground">
                  {t("footer.nitLabel")}
                </strong>{" "}
                901879752-1
              </p>

              <p>
                <strong className="text-primary-foreground">
                  {t("footer.character")}
                </strong>{" "}
                {t("footer.nonprofit")}
              </p>
            </div>
            <div>
              <p>
                <strong className="text-primary-foreground">
                  {t("footer.legalRep")}
                </strong>{" "}
                Aída Hernández Martínez
              </p>
              <p>
                <strong className="text-primary-foreground">
                  {t("footer.targetPop")}
                </strong>{" "}
                {t("footer.targetPopValue")}
              </p>
              <p>
                <strong className="text-primary-foreground">
                  {t("footer.coverage")}
                </strong>{" "}
                {t("footer.coverageValue")}
              </p>
            </div>
          </div>

          <div className="text-center text-primary-foreground/60 text-sm">
            <p className="flex items-center justify-center gap-2 mb-2">
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-4 h-4 text-passion fill-current" />
              <span>{t("footer.forLives")}</span>
            </p>
            <p>
              © {new Date().getFullYear()} Fundación El Verdadero Pan de Vida.{" "}
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
