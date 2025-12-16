import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-passion/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-passion" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">
            El Desafío que Enfrentamos
          </h2>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              En <strong>La Unión, Valle del Cauca</strong>, cientos de familias
              enfrentan diariamente la dura realidad de la pobreza extrema, la
              desnutrición infantil y la falta de oportunidades educativas.
            </p>

            <div className="bg-card border-l-4 border-passion p-6 rounded-r-lg">
              <p className="font-semibold text-passion mb-3">
                La realidad que queremos cambiar:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>
                    Niños que asisten a la escuela sin haber desayunado
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>
                    Madres cabeza de hogar sin recursos para alimentar a sus
                    hijos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>
                    Familias viviendo en condiciones precarias sin acceso a
                    servicios básicos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-passion mr-2">•</span>
                  <span>
                    Jóvenes sin oportunidades educativas o laborales que
                    construyan un futuro digno
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Esta situación no solo afecta la salud física de las familias,
              sino también su dignidad, autoestima y esperanza.{" "}
              <strong>
                Pero creemos que juntos podemos cambiar esta historia.
              </strong>
            </p>

            <div className="bg-gradient-to-r from-hope/10 to-accent/10 p-6 rounded-lg border border-hope/20">
              <p className="text-center text-xl font-semibold text-primary">
                "Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre"
                <span className="block text-base text-muted-foreground mt-2">
                  Juan 6:35
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
