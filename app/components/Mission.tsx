import { Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestra Misión
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos una fundación cristiana sin ánimo de lucro, comprometida con
            el desarrollo integral de niños, adolescentes y familias en
            situación de vulnerabilidad en La Unión, Valle del Cauca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Fe y Amor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compartimos el amor de Jesús a través de acciones concretas que
                transforman vidas y restauran esperanzas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Comunidad
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Construimos una red de apoyo donde cada familia encuentra
                dignidad, respeto y oportunidades de crecimiento.
              </p>
            </CardContent>
          </Card>

          <Card className="border-passion/20 hover:border-passion transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-passion/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-passion" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Educación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fortalecemos capacidades a través de formación, acompañamiento y
                herramientas para un futuro mejor.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestra Visión
              </h3>
              <p className="text-foreground leading-relaxed">
                Ser reconocidos en Colombia como un modelo de transformación
                social cristiana, donde cada persona descubre su valor y
                potencial en Cristo, construyendo comunidades prósperas y llenas
                de esperanza.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestros Valores
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Amor:</strong> Base de todo nuestro servicio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Dignidad:</strong> Respeto a cada persona
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Transparencia:</strong> Gestión honesta de recursos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Compromiso:</strong> Presencia constante en la
                    comunidad
                  </span>
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
