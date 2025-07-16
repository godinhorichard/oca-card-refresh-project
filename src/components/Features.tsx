import { Smile, CheckCheck, Shield, Gift } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smile,
      title: "Ajustado al",
      subtitle: "ritmo de tu vida"
    },
    {
      icon: CheckCheck,
      title: "Sin requisitos",
      subtitle: "de aprobación"
    },
    {
      icon: Shield,
      title: "Cancelalo",
      subtitle: "cuando quieras"
    },
    {
      icon: Gift,
      title: "Más beneficios",
      subtitle: "y experiencias"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;