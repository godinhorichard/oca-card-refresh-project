import heroImage from "@/assets/hero-oca-planes.jpg";
import ocaPlanesLogo from "@/assets/oca-planes-logo.svg";

const Hero = () => {
  return (
    <section className="relative h-96 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="OCA Planes Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
        <div className="text-white">
          <img
            src={ocaPlanesLogo}
            alt="OCA Planes"
            className="h-16 md:h-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;