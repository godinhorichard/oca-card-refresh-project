import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingCards = () => {
  const plans = [
    {
      id: "basic",
      name: "Plan básico",
      description: "Los beneficios que ya tenés",
      features: [
        "Sumas metros con todas tus compras",
        "Promociones en venta, lugares gastronómicos y más"
      ],
      variant: "plan-basic" as const,
      colorClass: "border-t-plan-basic"
    },
    {
      id: "advanced",
      name: "Plan avanzado",
      description: "Mejores beneficios y descuentos todos los días",
      features: [
        "Descuentos en centros de comercios",
        "Beneficios en la actualidad de la tarjeta",
        "3 y 6 cuotas en el exterior"
      ],
      variant: "plan-advanced" as const,
      colorClass: "border-t-plan-advanced"
    },
    {
      id: "total",
      name: "Plan total",
      description: "Lo mejor de OCA y más",
      features: [
        "Descuentos en centros de comercios",
        "Beneficios en la actualidad de la tarjeta",
        "3 y 6 cuotas en el exterior",
        "De no comprar en viajar en el exterior",
        "Atención preferencial"
      ],
      variant: "plan-total" as const,
      colorClass: "border-t-plan-total"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Te damos la bienvenida a la mejor propuesta para los uruguayos
          </h2>
          <p className="text-xl text-primary font-medium mb-8">
            Lanzamos OCA Planes para que elijas el plan que mejor se adapta a vos con mejores beneficios y más posibilidades todos los días
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.colorClass} border-t-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.variant} 
                  className="w-full font-semibold"
                  size="lg"
                >
                  Conocer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;