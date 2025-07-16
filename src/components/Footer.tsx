const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="mb-6">
            <div className="text-2xl font-bold">OCA</div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white">Tarjetas de crédito</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Cuenta OCA Blue</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Préstamos</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white">Atención al cliente</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Seguridad digital</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Comercios</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-blue-100">0800 1234</li>
              <li className="text-blue-100">info@oca.com.uy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 OCA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;