import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 md:py-6 max-w-[1400px] mx-auto">
      {/* Logo et éléments de gauche */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto mb-4 md:mb-0">
        <Image src="/images/logoliqtrade.png" alt="Liqtrade" width={120} height={30} className="object-contain mb-4 md:mb-0" />
        <div className="flex flex-col md:flex-row md:ml-16 space-y-4 md:space-y-0">
          <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 text-center">Prêt</span>
          <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 text-center">Affacturage</span>
        </div>
      </div>

      {/* Éléments de droite */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-4 md:mb-0 w-full md:w-auto">
          <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:ml-40 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Simulateur</span>
          <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Contact</span>
          <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Publications</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto md:ml-8">
          <button 
            className="bg-white text-[#22C55E] hover:bg-gray-50 text-sm font-medium px-6 py-2.5 rounded-md transition-all duration-200 w-full md:w-[120px] border border-[#22C55E] whitespace-nowrap flex items-center justify-center"
          >
            S&apos;inscrire
          </button>
          <Link 
            href="/dashboard"
            className="bg-[#22C55E] text-white hover:bg-[#16A34A] text-sm font-medium px-6 py-2.5 rounded-md transition-all duration-200 w-full md:w-[120px] whitespace-nowrap flex items-center justify-center"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 