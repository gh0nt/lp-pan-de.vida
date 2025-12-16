import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const Impact = () => {
  const stats = [
    {
      number: "150+",
      label: "Familias Beneficiadas",
      description: "Acompañamiento mensual",
    },
    {
      number: "300+",
      label: "Niños y Adolescentes",
      description: "En programas educativos",
    },
    {
      number: "12.000+",
      label: "Comidas Servidas",
      description: "Alimentación diaria",
    },
    {
      number: "5 años",
      label: "De Compromiso",
      description: "Transformando la comunidad",
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
            Nuestro Impacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada donación, cada hora de voluntariado, cada oración... todo se
            transforma en vidas restauradas y esperanzas renovadas.
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
                Historias de Transformación
              </h3>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-accent pl-4">
                  <p className="italic mb-2">
                    "Antes mis hijos iban a la escuela sin desayunar. Ahora,
                    gracias a la fundación, no solo reciben alimentación, sino
                    también apoyo con sus tareas y valores cristianos."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — María, madre de 3 niños
                  </p>
                </div>
                <div className="border-l-4 border-hope pl-4">
                  <p className="italic mb-2">
                    "El programa 'Escalando Peldaños' me dio la oportunidad de
                    continuar mis estudios. Hoy estoy en la universidad gracias
                    al apoyo de la fundación."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Julián, beneficiario del programa
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestras Actividades Diarias
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>
                    Desayunos y almuerzos nutritivos para niños y familias
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>Apoyo escolar y refuerzo académico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>Talleres de valores y formación cristiana</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>Acompañamiento psicosocial a familias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>Capacitación en oficios y emprendimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-xl">✓</span>
                  <span>Entrega de kits escolares y útiles</span>
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
