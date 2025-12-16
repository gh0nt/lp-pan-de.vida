"use client";

import { Heart, HandHeart, Handshake, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

const HowToHelp = () => {
  return (
    <section
      id="ayudar"
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cómo Puedes Ayudar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hay muchas formas de ser parte de esta transformación. Cada gesto de
            amor cuenta y multiplica la esperanza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-hope/30 hover:border-hope transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-hope" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Dona</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tu donación económica permite que más familias reciban
                alimentación, educación y acompañamiento integral. Cada aporte
                transforma vidas.
              </p>
              <Button
                className="bg-hope text-hope-foreground hover:bg-hope/90 w-full"
                onClick={() =>
                  document
                    .getElementById("donar")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Donar Ahora
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Voluntariado
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comparte tu tiempo y talentos. Necesitamos voluntarios para
                cocina, apoyo escolar, talleres, acompañamiento y actividades
                recreativas.
              </p>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 w-full"
              >
                Ser Voluntario
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <CardContent className="pt-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Alianzas</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Si representas una empresa, iglesia o institución, podemos
                construir alianzas estratégicas para multiplicar el impacto en
                la comunidad.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full"
              >
                Crear Alianza
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Otras Formas de Apoyar
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>
                    <strong>Donaciones en especie:</strong> Alimentos no
                    perecederos, útiles escolares, ropa
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>
                    <strong>Apadrinamiento:</strong> Patrocina la educación de
                    un niño específico
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2 text-xl">✓</span>
                  <span>
                    <strong>Eventos solidarios:</strong> Organiza eventos para
                    recaudar fondos
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>
                    <strong>Difusión:</strong> Comparte nuestra misión en redes
                    sociales
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>
                    <strong>Oración:</strong> Intercede por las familias y
                    nuestro trabajo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>
                    <strong>Capacitación:</strong> Comparte tus conocimientos
                    profesionales
                  </span>
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
            Información para Donaciones
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow">
              <h4 className="font-bold text-primary mb-4 text-lg">
                Datos Bancarios
              </h4>
              <div className="space-y-3 text-foreground">
                <p>
                  <strong>Banco:</strong> [Nombre del Banco]
                </p>
                <p>
                  <strong>Tipo de cuenta:</strong> Ahorros / Corriente
                </p>
                <p>
                  <strong>Número:</strong> [Número de cuenta]
                </p>
                <p>
                  <strong>Titular:</strong> Fundación El Verdadero Pan de Vida
                </p>
                <p>
                  <strong>NIT:</strong> [NIT de la fundación]
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow">
              <h4 className="font-bold text-primary mb-4 text-lg">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    contacto@pandevida.org
                  </span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    +57 [Número de teléfono]
                  </span>
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
            * Las donaciones son deducibles de impuestos según la normativa
            colombiana
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
