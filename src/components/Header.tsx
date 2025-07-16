import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">OCA</div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary">Productos</a>
            <a href="#" className="text-gray-700 hover:text-primary">Beneficios</a>
            <a href="#" className="text-gray-700 hover:text-primary">Metraje</a>
            <a href="#" className="text-gray-700 hover:text-primary">Servicios</a>
            <a href="#" className="text-gray-700 hover:text-primary">Seguridad digital</a>
            <a href="#" className="text-gray-700 hover:text-primary">Atención al cliente</a>
            <a href="#" className="text-gray-700 hover:text-primary">Comercios</a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="default" size="sm">
            Ingresar a Mi Cuenta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;