import ocaLogo from "@/assets/oca-logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={ocaLogo} alt="OCA" className="h-8" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="https://oca.uy/productos/" className="text-gray-700 hover:text-primary text-sm font-medium">Productos</a>
            <a href="https://oca.uy/beneficios/" className="text-gray-700 hover:text-primary text-sm font-medium">Beneficios</a>
            <a href="https://oca.uy/metraje/" className="text-gray-700 hover:text-primary text-sm font-medium">Metraje</a>
            <a href="https://oca.uy/servicios/" className="text-gray-700 hover:text-primary text-sm font-medium">Servicios</a>
            <a href="https://oca.uy/ciber-seguridad/" className="text-gray-700 hover:text-primary text-sm font-medium">Seguridad digital</a>
            <a href="https://oca.uy/atencion-al-cliente/" className="text-gray-700 hover:text-primary text-sm font-medium">Atención al cliente</a>
            <a href="https://oca.uy/comercios/" className="text-gray-700 hover:text-primary text-sm font-medium">Comercios</a>
          </nav>
          
          {/* CTA Button */}
          <a 
            href="https://acceso.oca.com.uy/"
            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ingresar a Mi Cuenta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;