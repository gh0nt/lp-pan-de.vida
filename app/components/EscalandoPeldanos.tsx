import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import escalandoImage from "@/app/assets/escalando-peldanos.jpg";

const EscalandoPeldanos = () => {
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
                Escalando Peldaños
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Nuestro programa insignia que acompaña a niños y jóvenes en su
              camino hacia un futuro lleno de oportunidades, escalando paso a
              paso hacia sus sueños y metas.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Cada "peldaño" representa una etapa de crecimiento: desde el apoyo
              nutricional y académico básico, hasta becas educativas y
              orientación vocacional para jóvenes que aspiran a la educación
              superior.
            </p>
          </div>
          <div className="relative">
            <img
              src={escalandoImage.src}
              alt="Programa Escalando Peldaños"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-hope text-hope-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-bold text-lg mb-1">Transformando Futuros</p>
              <p className="text-sm">Un peldaño a la vez</p>
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
                Objetivos del Programa
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>Garantizar alimentación diaria nutritiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>Mejorar rendimiento académico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>Desarrollar habilidades para la vida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  <span>Fomentar valores cristianos</span>
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
                Componentes Clave
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Programa nutricional completo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Refuerzo escolar personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Talleres de arte y recreación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Apoyo psicosocial familiar</span>
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
                Resultados Esperados
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Niños bien alimentados y sanos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mejora en calificaciones escolares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Jóvenes con proyecto de vida claro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Familias fortalecidas y esperanzadas</span>
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
